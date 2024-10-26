# Bash One-Liners to Automate Your Workflow!

Today, I want to share a powerful Bash one-liner that’s been a game-changer for me in automating parts of my workflow: Curly Brace Expansion in Bash `{..}`

## What is it?

Curly brace expansion lets you write a single expression and expand it into multiple outputs. It’s quick, flexible, and can simplify a lot of repetitive tasks.

## Examples

Open your terminal (Bash or Zsh) and try this:

    echo {1..5}

Output: `1 2 3 4 5`

The terminal expands the content in the braces to give a sequence from 1 to 5.

This works for letters too:

    echo {a..z}

Output: `a b c d e f g h i j k l m n o p q r s t u v w x y z`

### Combining Curly Braces

Combine numbers and letters for mixed outputs:

    echo {1..3}{a..c}

Output: `1a 1b 1c 2a 2b 2c 3a 3b 3c`

## Practical Uses

Here are some ways I’ve used curly brace expansion to streamline my work:

### 1. Creating Files in Bulk

With just one line, you can create multiple files:

    touch file_{1..5}.txt

Creates: `file_1.txt file_2.txt file_3.txt file_4.txt file_5.txt`

Or even more complex filenames:

    touch {a..b}_{1..2}.txt

Creates: `a_1.txt a_2.txt b_1.txt b_2.txt`

### 2. Sorting Numbers in Descending Order

Here’s a handy trick to create a list of numbers in descending order for passing into an executable:

    ./sort {10..1}

Passes: `10 9 8 7 6 5 4 3 2 1` into the `sort` executable

### 3. Generating Test Emails

For testing Talent Hub’s email parsing, I needed tons of test emails. Curly brace expansion came to the rescue:

    echo hadi200{0..9}_{a..z}@gmail.com

Output (example):

    hadi2000_a@gmail.com
    hadi2000_b@gmail.com
    ....
    hadi2009_z@gmail.com

This can create thousands of unique email addresses on the fly.

### 4. Creating Test Cases for Your Program

If you’re into LeetCode or similar platforms, you know the struggle of creating extensive test cases. Curly brace expansion makes it simple:

    echo "[" {10..1} "," "]"

Output: `[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, ]`

Or if you don't want to remove the last comma manually:

    printf "[%s]\n" "$(echo {10..1} | sed 's/ /, /g')"

Output: `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

## Challenge Time!

Here’s a task for you:

Create a Bash one-liner to output:

    [ [3,1], [3,2], [3,3], [2,1], [2,2], [2,3], [1,1], [1,2], [1,3], ]

Share your answers with me on <a href="https://www.linkedin.com/in/hadi-kaddoura/">LinkedIn</a>, or if you’re stuck, drop a message. I’d be happy to help!

Happy coding!
