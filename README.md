# IPFS CRDT Shared Editing

> "Decentralized Real-Time Collaborative Documents - Conflict-free editing in the browser using js-IPFS and CRDTs"

An distributed application that allows for several users to edit the same document at the same time, something similar to Google Docs, but without any coordinating server.

**Check it out [Live Here](https://vigneshm.com/IPFS-CRDT-shared-editing/)**, Open it on few tabs or devices and start typing...

## IPFS

**IPFS** stands for Interplanetary File System, and is much more than a file system. It’s an entire network stack for the decentralised and peer-to-peer web, allowing you to build truly serverless web applications.

More about IPFS here [ipfs.io](ipfs.io).

## CRDT

**Conflict-Free Replicated Data Types** provides a conflict-free manner of replicating data across multiple nodes without ever having to elect a leader or use another type of centralized authority to reach consensus.


The project uses **js-ipfs**, which is a Javascript implementation of IPFS that works in Node.js and in a modern browser.

## The Project

A text editor that requires no server but yet, allows several users to edit it in a collaborative fashion. We can call it “google docs without google for plain text”.

[Project Live Here.](https://vigneshm.com/IPFS-CRDT-shared-editing/)

## Set up

### Pre-requisites

- Have Node.js version 6 or greater installed

### Install

```sh
$ git clone https://github.com/vigzmv/IPFS-CRDT-shared-editing.git
$ cd IPFS-CRDT-shared-editing
$ yarn install
```

### Build

```sh
$ yarn build
```

### Run

```sh
$ yarn start
```

### Open in browser

Using a modern browser that supports WebRTC, like a recent version of Chrome or Firefox, open several windows of [http://localhost:1234](http://localhost:1234) and start typing!!


## License

MIT
