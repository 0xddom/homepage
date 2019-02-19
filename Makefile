.PHONY: clean install build

build:
	gulp

install: build
	$(CHROME) --load-extension=`pwd`/dist

clean:
	rm -rf dist/*
