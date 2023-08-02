let handler = async (m) => {

let anu =`
*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Pengen Scnya? Cari Sendiri😀
wa : wa.me/6283846677065

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

${botdate}
`
await m.reply(anu)
}
handler.help = ['script', 'sc']
handler.tags = ['tools']
handler.command = /^(sc|script)$/i
handler.limit = false
export default handler