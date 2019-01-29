$("#login").click(function () {
    $.post("../../server/login", $("#testform").serialize(), function (res) {
        alert(data.message);
    })
})