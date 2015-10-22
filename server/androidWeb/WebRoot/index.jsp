<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'index.jsp' starting page</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
</head>

<body>
	文件上传测试服务器
	<br>
	<br>
	<br>
	<form action="/androidWeb/servlet" method="post"
		enctype="multipart/form-data">
		 文件1<input name="file" type="file"> <input
			type="submit" value="提交" />
	</form>
	
 	<form action="/androidWeb/servlet" method="post"
		enctype="multipart/form-data">
		姓名<input name="name" value=""> 密码<input name="password"
			value=""> <input
			type="submit" value="提交" />
	</form>
	 
	<form action="/androidWeb/UploadFile" method="post"
		enctype="multipart/form-data">
		 文件2<input name="file" type="file"> <input
			type="submit" value="提交" />
	</form>
</body>
</html>
