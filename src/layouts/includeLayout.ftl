<!DOCTYPE html>
<html>
<head>
    <title>${title!""}</title>
</head>
<body>
    <div id="wrapper">
        #include("../resources/public/header.ftl")
        <div id="content">
            {{{ content }}}
        </div>
        #include("../resources/public/footer.ftl")
    </div>
</body>
</html>