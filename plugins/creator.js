const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n'
                    + 'FN:ozan\n' // full name
                    + 'TEL;type=CELL;type=VOICE;waid=60102810046:+60 10-281 0046\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Aiman', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
