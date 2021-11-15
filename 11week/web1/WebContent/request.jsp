<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 예제 request.jsp</title>
</head>
<body>
<%
	request.setCharacterEncoding("utf-8"); /* kr이 아닌 싹다 utf-8로 해주자... */
%>

<%
	String name = request.getParameter("name");
	String studentNum = request.getParameter("studentNum");
	String sex = request.getParameter("sex");
	String country = request.getParameter("country");
	
  	if(sex.equalsIgnoreCase("man")) {
		sex = "남자";
	} else {
		sex = "여자";
	}
%>

<h2>학생정보입력결과</h2>

성명: <%= name %><p>
학번: <%= studentNum %><p>
성별: <%= sex %><p>
국적: <%= country %><p>
</body>
</html>