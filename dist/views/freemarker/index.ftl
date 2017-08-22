<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
<link href="/resources/css/vendors.05fe81032b5f708aa5f5.css" rel="stylesheet"><link href="/resources/css/freemarker/index.05fe81032b5f708aa5f5.css" rel="stylesheet"></head>
<body>
    <h1>freemarker template engine</h1>
<p>${username!""}</p>
<#if list??>
    <ul>
        <#list list as item>
            <li>${item.id} - ${item.title}</li>
        </#list>
    </ul>
</#if>
<script type="text/javascript" src="/resources/js/vendors.05fe81032b5f708aa5f5.js"></script><script type="text/javascript" src="/resources/js/freemarker/index.05fe81032b5f708aa5f5.js"></script></body>
</html>