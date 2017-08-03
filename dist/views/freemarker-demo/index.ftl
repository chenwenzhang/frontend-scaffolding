<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
<link href="/resources/css/vendors.e7d2702569345b449054.css" rel="stylesheet"><link href="/resources/css/freemarker-demo/index.e7d2702569345b449054.css" rel="stylesheet"></head>
<body>
    <h1>hello world</h1>
<p>${username!""}</p>
<#list list as item>
    ${item.id} - ${item.title}
</#list>
<script type="text/javascript" src="/resources/js/vendors.e7d2702569345b449054.js"></script><script type="text/javascript" src="/resources/js/freemarker-demo/index.e7d2702569345b449054.js"></script></body>
</html>