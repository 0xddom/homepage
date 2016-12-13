deploy: build
	update_homepage

build:
	gulp

.PHONY: clean
clean:
	rm -rf dist/*
