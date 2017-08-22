<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
<link href="/resources/css/vendors.96caf144b2e416ec62e9.css" rel="stylesheet"><link href="/resources/css/freemarker/index.96caf144b2e416ec62e9.css" rel="stylesheet"></head>
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
<script type="text/javascript" src="/resources/js/vendors.96caf144b2e416ec62e9.js"></script><script type="text/javascript" src="/resources/js/freemarker/index.96caf144b2e416ec62e9.js"></script></body>
</html>