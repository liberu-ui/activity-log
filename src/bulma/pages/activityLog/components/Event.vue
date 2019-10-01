<template>
    <article class="media box has-background-light has-padding-medium raises-on-hover">
        <figure class="media-left has-margin-top-small">
            <p class="image is-32x32">
                <img class="is-rounded is-clickable"
                    :src="route('core.avatars.show', event.owner.avatarId)"
                    @click="$router.push({
                        name: 'administration.users.show',
                        params: { user: event.owner.id },
                    })">
            </p>
        </figure>
        <div class="event">
            <p class="heading">
                {{ event.time }}
            </p>
            <p v-html="message"/>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Event',

    inject: ['i18n', 'route'],

    props: {
        event: {
            type: Object,
            required: true,
        },
    },

    computed: {
        message() {
            const attributes = this.event.meta.attributes;

            return Object.keys(attributes)
                .reduce((message, attribute) => message.split(`:${attribute}`)
                    .join(`<strong>${attributes[attribute]}</strong>`),
                this.i18n(this.event.meta.message));
        },
    },
};
</script>
