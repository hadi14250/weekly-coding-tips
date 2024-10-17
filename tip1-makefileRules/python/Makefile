SRCS	= main.py
PYTHON	= python3

ARGS := $(filter-out $(firstword $(MAKECMDGOALS)),$(MAKECMDGOALS))

exec: 	$(NAME)
			@$(PYTHON) $(SRCS) $(ARGS)

%:
	@:
