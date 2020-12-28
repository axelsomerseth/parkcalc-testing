## Run tests via NPM
test:
	@npm test

## Run tests standalone
test-st:
	@./node_modules/.bin/cucumber-js

## build-container: Build docker container
build-container:
	@docker build --pull --rm -f "Dockerfile" -t parkcalc-testing:latest "." 

## run-container: Run docker container
run-container:
	@docker run --rm -d  -p 80:80/tcp parkcalc-testing:latest