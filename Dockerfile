FROM ruby:3.0.3-alpine

ENV BUNDLER_VERSION=2.2.32

RUN apk add --update --no-cache \
      build-base 

WORKDIR /app

COPY Gemfile* ./

RUN gem install bundler -v $BUNDLER_VERSION
RUN bundle install

COPY . .

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0"]