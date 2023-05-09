# Gromit Example Rails Backend and Next.js Frontend

[Gromit is a Ruby Gem](https://github.com/releasehub-com/gromit) that
uses Redis and OpenAI embeddings to index your documentation. This 
repository provides a Rails application, and a Next.js frontend application
originally built by the folks at [Supbase](https://supabase.com/).

The Rails application provides an API interface to `redis-stack-server` that will
store and allow searching of your documentation using OpenAI's embeddings.
There are also command line tools from the underlying Gromit Ruby Gem for indexing
your documentation locally and/or uploading them to a remote Gromit based API service.

## Usage:

### Running in Release

* Create your account in [Release](https://app.release.com/) if you don't already have one
* Create a new application in Release using a fork of this repository
* Update the `OPENAI_API_KEY` and `OPENAI_KEY` env variables with your OpenAI API Key
* Deploy your application
* Release will provide URLs for both the frontend and backend applications

### Running Everything Locally in Docker
```bash
  docker-compose up
```

After starting up the various services using docker compose, You should be
able to access the backend Rails API at `http://localhost:3000` and the 
next.js frontend at `http://localhost:9293`

### Running Locally on MacOS
Install redis-stack-server note that if are already running Redis you
will need to stop/disable the old version of redis. 
```bash
  brew tap redis-stack/redis-stack
  brew install redis-stack
```

Create a .env file with your `OPEN_API_KEY`
```
OPEN_API_KEY=your_openai_api_key
```

Start the Rails Server
```bash
rails s
```

The Next.js frontend lives in the `frontend` directory

Copy the `.env.example` to `.env` and edit the following
```
OPENAI_KEY=your-openai-key
```

Start the Next.js frontend
```bash
npnm run dev
```


## Indexing / Uploading your Docs

To index your documentation locally you can use `gromit-reindexer`. This will update `redis-stack-server` running on your machine.
```bash
bundle exec gromit-reindexer -s /path/to/your/docs
```

To remotely upsert your documentation you can use `gromit-uploader`.
```bash
BASE_URL=https://gromit-rails.example.com bundle exec gromit-uploader -s /path/to/your/docs
```


