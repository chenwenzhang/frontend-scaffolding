<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
</head>
<body>
<div id="wrapper">
    #include("../components/header.ftl")
    <div id="content">
        {{{ content }}}
    </div>
    #include("../components/footer.ftl")
</div>
</body>
</html>