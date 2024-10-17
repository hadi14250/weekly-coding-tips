SRCS			= main.js
NODE			= node

ARGS := $(filter-out $(firstword $(MAKECMDGOALS)),$(MAKECMDGOALS))

exec: 			$(NAME)
				@$(NODE) $(SRCS) $(ARGS)
%:
	@:
