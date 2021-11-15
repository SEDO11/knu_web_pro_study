<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP 예제</title>
</head>
<body>
<%-- 	<% int i = 24; %>
	<%
		out.println("하루는" + i + " 시간이며,<br>");
		out.println("하루는" + i*60 + " 분 입니다.");
	%> --%>
	
<% int year = 365; %>
	<% out.println("1년은 약 몇 주 일까요? <p>"); %>
	<%= year / 7 %>
	<%= " 주 입니다." %>
<%-- 	<% String []str = ("감사합니다.", "Thank you"); %>
	한국어로 [<% str[0] %>]는 <br>
	영어로 [<%= str[1] %>]이다. 왜 안돼 시발아 --%>
</body>
</html>