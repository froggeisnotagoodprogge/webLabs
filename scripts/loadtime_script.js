(function() {
    var start = Date.now()
    window.addEventListener('load', function() {
        let res = Date.now() - start
        document.getElementById('pltRes').textContent = res
    });
})();