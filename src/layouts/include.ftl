<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
</head>
<body>
<div id="wrapper">
    #include("../resources/components/header.ftl")
    <div id="content">
        {{{ content }}}
    </div>
    #include("../resources/components/footer.ftl")
</div>
</body>
</html>