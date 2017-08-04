<h1>freemarker template engine</h1>
<p>${username!""}</p>
<#list list as item>
    ${item.id} - ${item.title}
</#list>