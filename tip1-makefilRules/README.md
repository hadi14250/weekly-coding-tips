# Tip 1

Are you tired of manually compiling your C, C++, or similar language files? Frustrated that your `Makefile` only compiles the code and leaves `.o` files all over? Or maybe you're annoyed at having to run `make all` and then execute your program manually, like `./program_name`? 

This week's tip is for you! It's simple, but it has significantly boosted my productivity, especially because I tend to compile and run my code frequently to test it. So, I wondered if I could combine these steps into a single rule that would both compile and run the code in one go.

### The Problem with Arguments

One challenge with combining these steps is that most of my code requires command-line arguments. Typically, I need to run the program like this:

```bash
./program_name arg1 arg2 arg3

```

So, how can I create a Makefile rule that handles these arguments effectively?

### The Solution
This line of code does all the magic and can be found in every Makefile in this directory here:

```Makefile
ARGS := $(filter-out $(firstword $(MAKECMDGOALS)),$(MAKECMDGOALS))
```

### How It Works
The line above extracts arguments passed after the initial make command. For example, if you run:

```bash
make exec arg1 arg2 arg3
```

`ARGS` will be set to `arg1 arg2 arg3`, allowing you to pass them directly to the program when it runs. This way, you can create a single rule that compiles and executes your program with any arguments you need.

### Putting It All Together

Here’s an example `Makefile` rule that uses this line to combine compilation and execution:

```Makefile
exec: $(NAME)
	@./$(NAME) $(ARGS)
```

*<span style="font-size: 12px;">You can find the full `Makefile` in any of the directories above (cpp, javascript, python)</span>


With this setup, you can streamline your workflow by running just one command:

```bash
make exec arg1 arg2 arg3
```

### Adding the rexec Rule
Now, let's take it a step further with a `rexec` rule. This rule will:
1. Recompile the files.
2. Remove the `.o` files afterward.
3. Execute the program with any command-line arguments you pass.

Here's how to define it in your `Makefile`:

```Makefile
rexec: $(NAME)
	@rm -f *.o
	@./$(NAME) $(ARGS)
```

Now, you can compile, clean up, and run your program with just one command:

```bash
make rexec arg1 arg2 arg3
```

### The Importance of `%`:
Lastly, these `Makefile` uses a wildcard target rule:
```Makefile
%:
	@:
```

This line is crucial because it prevents errors when you pass additional arguments (like `arg1`, `arg2`) to `make`. Without it, `make` would attempt to interpret these arguments as targets and stop with an error if they aren't defined. This rule ensures that `make` ignores undefined targets and lets you seamlessly pass arguments to your program.


This approach keeps your directory clean by removing object files after each build, and it also saves you time by combining multiple steps into a single command. This has been a huge productivity booster, and I hope it will be for you too!

---

Stay tuned for more tips, and happy coding!