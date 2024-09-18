#!/bin/bash

# Check if a number argument is provided
if [ $# -eq 0 ]; then
  echo "Error: Please provide a number as an argument."
  exit 1
fi

# Extract the number argument
number=$1

# Create the HTML file
cat <<EOF > "src/pages/$number.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=h1, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />

  <title>Document</title>
</head>
<body>
  <a href="../../index.html">index</a>

  <h1>$number</h1>

  <img id="fred" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32887/fred.svg" alt="" width="150" />

  <script type="module" src="./$number.ts"></script>
</body>
</html>
EOF

# Replace the placeholder with the actual number inside the <h1> tag
sed -i "s/<span id='number-placeholder'><\/span>/$number/g" "$number.html"

# Create the TS file
echo "import gsap from 'gsap';" > "src/pages/$number.ts"

echo "Created files: $number.html, $number.ts"