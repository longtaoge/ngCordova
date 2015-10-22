package com.lgy.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 * @author Administrator
 *  文件上传测试
 */
public class UploadFile extends HttpServlet {
 private static final long serialVersionUID = -6314857550447430577L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request, response);
		// PrintWriter writer = response.getWriter();

	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		boolean isMultipart = ServletFileUpload.isMultipartContent(request);
		if (isMultipart) {
			String realpath = request.getSession().getServletContext()
					.getRealPath("/files");
			System.out.println(realpath);
			File dir = new File(realpath);
			if (!dir.exists())
				dir.mkdirs();

			FileItemFactory factory = new DiskFileItemFactory();
			ServletFileUpload upload = new ServletFileUpload(factory);
			upload.setHeaderEncoding("UTF-8");
			try {
				List<FileItem> items = upload.parseRequest(request);
				for (FileItem item : items) {
					if (item.isFormField()) {
						String name1 = item.getFieldName();// 得到请求参数的名称
						String value = item.getString("UTF-8");// 得到参数值
						System.out.println(name1 + "=" + value);
					} else {
						item.write(new File(dir, System.currentTimeMillis()
								+ item.getName().substring(
										item.getName().lastIndexOf("."))));
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			doGet(request, response);
		}

	}

}
