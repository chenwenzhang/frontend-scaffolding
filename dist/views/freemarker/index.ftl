<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
<link href="/resources/css/vendors.3708380dc1f117192cfe.css" rel="stylesheet"><link href="/resources/css/freemarker/index.3708380dc1f117192cfe.css" rel="stylesheet"></head>
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
<script type="text/javascript" src="/resources/js/vendors.3708380dc1f117192cfe.js"></script><script type="text/javascript" src="/resources/js/freemarker/index.3708380dc1f117192cfe.js"></script></body>
</html>