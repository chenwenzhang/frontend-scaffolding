<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
<link href="/resources/css/vendors.301681d7997371c293be.css" rel="stylesheet"><link href="/resources/css/freemarker/index.301681d7997371c293be.css" rel="stylesheet"></head>
<body>
    <h1>freemarker template engine</h1>
<p>${username!""}</p>
<#list list as item>
    ${item.id} - ${item.title}
</#list>
<script type="text/javascript" src="/resources/js/vendors.301681d7997371c293be.js"></script><script type="text/javascript" src="/resources/js/freemarker/index.301681d7997371c293be.js"></script></body>
</html>