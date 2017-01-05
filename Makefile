.PHONY: clean deploy build
deploy: build
	update_homepage

build:
	gulp

clean:
	rm -rf dist/*
