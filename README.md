
# Sony Cameras Stream Receiver

How to receive the sony cameras stream directly locally in your computer.

The software creates a rtmp server and shows the streams in the address command line

You can consume the stream with any software that supports rtmp connecting to:

```
rtmp://127.0.0.1/<channel_number>/broadcaster/live<live_number>
```

**channel_number**: you can find the instructions to find the channel_number below

**live_number**: The application will write this once the camera starts streaming

eg: 
```
2018-11-3 23:06:02 5092 [INFO] [rtmp publish] New stream. id=... streamPath=/<channel_number>/broadcaster/live2744 streamId=1
```

# Run the application

```
npm i
sudo node ./index.js --web.channel_number=<channel_number> --dns.external_ip=<external_ip>
```

# Prerequisites

## Channel number

Ustream channel number should be passed when starting the software with `--web.channel_number=<channel_number>`

To get the channel number visit https://www.ustream.tv/dashboard/manage-show/ and, after login,
you'll see the channel number at the end of the url:

eg. https://www.ustream.tv/dashboard/manage-show/12345678

## DNS spoofing

You need to redirect all request to `api.ustream.tv` to your computer, the module can do the job for you but it needs help.

1. use the `--dns.external_ip=<address>` command line option (address should be the IP of your computer in the local network)
2. set your router to use your local computer as dns server

# Persist configuration

The configuration can be persisted creating a `.scsrrc` file in the local directory containing:

```
{
    "web": {
        "channel_number": <channel_number>
    },
    "dns": {
        "external_ip": "external_ip"
    }
}
```
