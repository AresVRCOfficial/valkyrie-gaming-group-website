// Function to post new spotlight to Discord webhook
function postToDiscord(name, description, imageUrl) {
    const webhookUrl = '';

    const data = {
        username: 'Member Spotlight',
        avatar_url: 'YOUR_AVATAR_URL',
        embeds: [
            {
                title: `New Member Spotlight: ${name}`,
                description: description,
                image: {
                    url: imageUrl
                },
                color: 3447003
            }
        ]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Posted to Discord successfully!');
        } else {
            console.error('Failed to post to Discord');
        }
    })
    .catch(error => console.error('Error posting to Discord:', error));
}