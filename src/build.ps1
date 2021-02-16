type *.js > ../MyLib_js.js
$content = Get-Content -Raw "../MyLib_js.js"
[IO.File]::WriteAllLines("../MyLib_js.js", $content)