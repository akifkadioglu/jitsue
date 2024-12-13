<template>
    <div>
        <h1>{{ props.roomName }}</h1>
        <div id="meet"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { generateUUID } from '../utils/uuid';

onMounted(() => {
    JitsiMeetJS.init();

    var connection = new JitsiMeetJS.JitsiConnection(null, null, options);

    connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED, onConnectionSuccess);
    connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_FAILED, onConnectionFailed);
    connection.addEventListener(JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED, disconnect);

    connection.connect();
})
function onConnectionSuccess() {
    console.log('Connection established');
}
function onConnectionFailed() {
    console.log('Connection failed');
}
function disconnect() {
    console.log('Disconnected');
}
const props = defineProps({
    domain: {
        type: String,
        default: 'https://meet.jit.si',
    },
    roomName: {
        type: String,
        default: generateUUID(),
    },
    width: {
        type: Number,
        default: 700,
    },
    height: {
        type: Number,
        default: 700,
    },
    lang: {
        type: String,
        default: 'en',
    },
    jwt: {
        type: String,
        default: '',
    }
});

const options = {
    roomName: props.roomName,
    width: props.width,
    height: props.height,
    parentNode: document.querySelector('#meet'),
    lang: props.lang,
    hosts: {
        domain: props.domain,
    },
    serviceUrl: 'https://meet.jit.si/http-bind',
    jwt: props.jwt
};
</script>