## Serverless React Server Side Rendering

## Setup

### Define your WP API endpoint
Rename `site.js.example`
```
$ mv config/site.js.example config/site.js
```

Edit `site.js` for your WP API endpoint

```
module.exports = {
  api: "https://YOUR_WP_SITE_URL/wp-json"
}
```

### Install Packages

```
$ npm install
```

### Setup AWS-CLI

See [AWS documentation](http://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-getting-set-up.html)

```
$ aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: us-east-1
Default output format [None]: json
```
example from: [http://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-getting-started.html](http://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-getting-started.html)

## Deployment

```
$ ./node_modules/serverless/bin/serverless deploy
```

## Extra libs
- [mikan.js](https://github.com/trkbt10/mikan.js)
