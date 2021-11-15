<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GCD 프로그램</title>
</head>
<body>
<% /* post 방식 */
	request.setCharacterEncoding("utf-8");
%>
<% /* 현재시간 */
	Date nowTime = new Date();
	SimpleDateFormat sf = new SimpleDateFormat("a hh시 mm분");
%>
<% /* 최대공약수 */
	String num1 = request.getParameter("num1");
	String num2 = request.getParameter("num2");

	int intNum1 = Integer.parseInt(num1);
	int intNum2 = Integer.parseInt(num2);
	
	int min = (intNum1 < intNum2) ? intNum1 : intNum2; 
	int gcd = 0; 
	for (int i = 1; i <= min; i++) { 
		if (intNum1 % i == 0 && intNum2 % i == 0) 
			gcd = i; 
		}
%>
<% /* 횟수 카운트 */
	int count;
	if(session.getAttribute("count") != null) {
		count = ((Integer)session.getAttribute("count")).intValue();
	} else {
		count = 0;	
	}
	count++;
%>
<% /* 세션에 카운트 값 저장 */
	session.setAttribute("count", new Integer(count));
%>
<h2>GCD 프로그램</h2>
<hr>
<p>
num1: <%= num1 %><p>
num2: <%= num2 %><p>
<hr>
GCD(<%= num1 %>, <%= num2 %>): <%= gcd%>
<p>
현재 시간: <%=sf.format(nowTime) %>, 실행 횟수 : <%=count%>
</body>
</html>