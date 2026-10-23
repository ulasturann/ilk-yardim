// Grup b sahneleri: kanama, yaralanmalar, travma, çevresel aciller, taşıma.
// Her sahne: 320x180 satır içi SVG; animasyonlar site/css/scenes-b.css içinde.
export default {
  kanama: {
    label: 'Kanama',
    tint: '#FFE9E7',
    svg: `<svg class="scene sc-kanama" viewBox="0 0 320 180" role="img" aria-label="Kanayan yaraya temiz bezle doğrudan baskı uygulanıyor">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="160" cy="160" rx="124" ry="6" fill="#1F2A44" fill-opacity=".07" stroke="none"/>
<ellipse class="kn-ring" cx="154" cy="159" rx="10" ry="3" fill="none" stroke="#E5484D" stroke-width="2"/>
<path d="M58 89C108 84 176 91 226 97V123C176 125 108 132 58 132Z" fill="#F6C9A8"/>
<path d="M224 96C240 92 258 93 272 99C284 104 288 113 281 118C274 123 258 124 246 123L224 124" fill="#F6C9A8"/>
<path d="M238 99C242 91 254 89 260 94" fill="#F6C9A8"/>
<path d="M256 108L276 110M252 115L272 117" stroke-width="2" opacity=".35"/>
<rect x="16" y="80" width="50" height="60" rx="14" fill="#3E7BFA"/>
<path d="M54 86V134" stroke-width="2" opacity=".35"/>
<path class="kn-tr" d="M154 95C155 104 152 114 154 127" fill="none" stroke="#E5484D" stroke-width="3.5"/>
<ellipse cx="151" cy="92.5" rx="10" ry="3.2" fill="#E5484D" stroke="#B42318" stroke-width="2"/>
<g transform="translate(154 137)"><path class="kn-d1" d="M0-8C3-3 6 0 6 4A6 6 0 0 1-6 4C-6 0-3-3 0-8Z" fill="#E5484D" stroke="#B42318" stroke-width="1.6"/></g>
<g transform="translate(154 137)"><path class="kn-d2" d="M0-8C3-3 6 0 6 4A6 6 0 0 1-6 4C-6 0-3-3 0-8Z" fill="#E5484D" stroke="#B42318" stroke-width="1.6"/></g>
<g class="kn-press">
<path d="M106-14H140L150 66L124 70Z" fill="#F6C9A8"/>
<path d="M100-14H146L146 22L106 28Z" fill="#12A594"/>
<rect x="124" y="81" width="56" height="15" rx="4" fill="#FFFFFF"/>
<path d="M136 85V92M146 85V92M156 85V92M166 85V92" stroke="#C5CEDB" stroke-width="2"/>
<path d="M122 76C122 66 128 62 136 62H152C158 62 162 64 166 67L180 73C185 76 184 81 178 81H127C124 81 122 79 122 76Z" fill="#F6C9A8"/>
<path d="M138 74C146 76 154 76 162 74" fill="none" stroke-width="2"/>
</g>
</g>
</svg>`,
  },

  yara: {
    label: 'Yaralanmalar',
    tint: '#E6F6EE',
    svg: `<svg class="scene sc-yara" viewBox="0 0 320 180" role="img" aria-label="Kola sargı bezi sarılıyor ve yara bandı">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="156" cy="162" rx="118" ry="6" fill="#1F2A44" fill-opacity=".07" stroke="none"/>
<g transform="rotate(-7 160 104)">
<path d="M58 84C106 80 170 86 218 92V118C170 120 106 126 58 126Z" fill="#F6C9A8"/>
<path d="M216 91C232 87 250 88 264 94C276 99 280 108 273 113C266 118 250 119 238 118L216 119" fill="#F6C9A8"/>
<path d="M230 94C234 86 246 84 252 89" fill="#F6C9A8"/>
<rect x="18" y="76" width="48" height="58" rx="14" fill="#8E4EC6"/>
<path d="M56 82V128" stroke-width="2" opacity=".35"/>
<path d="M126 104C132 101 140 101 146 104" fill="none" stroke="#E5484D" stroke-width="3"/>
<g transform="translate(102 105) rotate(12)"><g class="yr-b yr-b1"><rect x="-12" y="-27" width="24" height="54" rx="5" fill="#FFFFFF"/><path d="M-5-20V20" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g transform="translate(124 105) rotate(12)"><g class="yr-b yr-b2"><rect x="-12" y="-27" width="24" height="54" rx="5" fill="#FFFFFF"/><path d="M-5-20V20" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g transform="translate(146 105) rotate(12)"><g class="yr-b yr-b3"><rect x="-12" y="-27" width="24" height="54" rx="5" fill="#FFFFFF"/><path d="M-5-20V20" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g transform="translate(168 105) rotate(12)"><g class="yr-b yr-b4"><rect x="-12" y="-27" width="24" height="54" rx="5" fill="#FFFFFF"/><path d="M-5-20V20" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g class="yr-roll"><g transform="translate(98 143)"><g class="yr-spin"><circle r="12" fill="#FFFFFF"/><circle r="4.5" fill="#E9EEF5" stroke-width="2"/><path d="M0-8.5A8.5 8.5 0 0 1 8.5 0" fill="none" stroke="#C5CEDB" stroke-width="2"/></g></g></g>
</g>
<g transform="translate(262 42) rotate(-30)"><g class="yr-pl"><rect x="-32" y="-11" width="64" height="22" rx="11" fill="#FFC53D"/><rect x="-11" y="-8" width="22" height="16" rx="3" fill="#FFFFFF" stroke-width="2.25"/><path d="M-24-3h.1M-19 3h.1M-24 3h.1M-19-3h.1M19-3h.1M24 3h.1M19 3h.1M24-3h.1" stroke-width="2.6"/></g></g>
<g transform="translate(204 58)"><path class="yr-s1" d="M0-8Q1-1 8 0Q1 1 0 8Q-1 1-8 0Q-1-1 0-8Z" fill="#FFC53D" stroke-width="1.8"/></g>
<g transform="translate(88 62)"><path class="yr-s2" d="M0-6Q1-1 6 0Q1 1 0 6Q-1 1-6 0Q-1-1 0-6Z" fill="#7EE2B8" stroke-width="1.8"/></g>
<g transform="translate(296 74)"><path class="yr-s3" d="M0-6Q1-1 6 0Q1 1 0 6Q-1 1-6 0Q-1-1 0-6Z" fill="#7EE2B8" stroke-width="1.8"/></g>
</g>
</svg>`,
  },

  kopma: {
    label: 'Uzuv Kopması',
    tint: '#E2F2F8',
    svg: `<svg class="scene sc-kopma" viewBox="0 0 320 180" role="img" aria-label="Kopan parça gazlı beze sarılı, torbada; torba buzlu su dolu kapta">
<defs><clipPath id="kopma-cp"><path d="M70 64H250L238 150Q236 158 228 158H92Q84 158 82 150Z"/></clipPath></defs>
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="160" cy="164" rx="102" ry="6" fill="#1F2A44" fill-opacity=".08" stroke="none"/>
<path d="M70 64H250L238 150Q236 158 228 158H92Q84 158 82 150Z" fill="#FFFFFF" fill-opacity=".55" stroke="none"/>
<g class="km-bag">
<path d="M134 74C122 60 112 54 104 52" fill="none" stroke-width="2"/>
<g transform="translate(96 48) rotate(-16)"><rect x="-15" y="-10" width="30" height="20" rx="4" fill="#FFC53D"/><circle cx="-8" cy="0" r="2.2" fill="#FFFFFF" stroke-width="1.8"/><path d="M-2-3H9M-2 3H6" stroke-width="2"/></g>
<path d="M130 80H190L194 140Q194 146 188 146H132Q126 146 126 140Z" fill="#FFFFFF" fill-opacity=".8"/>
<rect x="128" y="72" width="64" height="10" rx="3" fill="#FFFFFF"/>
<path d="M133 86H187" stroke="#E5484D" stroke-width="3"/>
<g transform="translate(160 116) rotate(-24)">
<rect x="-11" y="-24" width="22" height="46" rx="11" fill="#FFFFFF"/>
<path d="M-11-13A11 11 0 0 1 11-13V-11H-11Z" fill="#F6C9A8"/>
<path d="M-10-2L10-7M-10 7L10 2M-10 15L10 10" stroke="#C5CEDB" stroke-width="2"/>
</g>
<path d="M134 94V134" stroke="#FFFFFF" stroke-width="3"/>
</g>
<g transform="translate(97 96) rotate(12)"><g class="km-i km-i1"><rect x="-10" y="-10" width="20" height="20" rx="4" fill="#FFFFFF"/><path d="M-4-4H3" stroke="#9EC5FF" stroke-width="2.5"/></g></g>
<g transform="translate(223 97) rotate(-10)"><g class="km-i km-i2"><rect x="-11" y="-11" width="22" height="22" rx="4" fill="#FFFFFF"/><path d="M-5-5H3" stroke="#9EC5FF" stroke-width="2.5"/></g></g>
<g transform="translate(104 126) rotate(30)"><g class="km-i km-i3"><rect x="-7" y="-7" width="14" height="14" rx="3" fill="#FFFFFF"/></g></g>
<g clip-path="url(#kopma-cp)"><path class="km-w" d="M40 98q10-5 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0V170H40Z" fill="#9EC5FF" fill-opacity=".55" stroke="#3E7BFA" stroke-width="2.5"/></g>
<path d="M70 64H250L238 150Q236 158 228 158H92Q84 158 82 150Z" fill="none"/>
<rect x="62" y="58" width="196" height="10" rx="5" fill="#E9EEF5"/>
<path d="M84 76L92 140" stroke="#FFFFFF" stroke-width="4" opacity=".85"/>
<g transform="translate(284 36)"><circle r="16" fill="#FFFFFF"/><path d="M0-12V-9M12 0H9M0 12V9M-12 0H-9" stroke-width="2"/><path d="M0 0L-5-4" stroke-width="2.5"/><g class="km-h"><path d="M0 0V-10" stroke="#E5484D" stroke-width="2.5"/></g><circle r="2" fill="#1F2A44" stroke="none"/></g>
</g>
</svg>`,
  },

  kirik: {
    label: 'Kırık / Çıkık / Burkulma',
    tint: '#FFF3DC',
    svg: `<svg class="scene sc-kirik" viewBox="0 0 320 180" role="img" aria-label="Kırık bacak atelle sabitleniyor">
<defs><radialGradient id="kirik-g"><stop offset="0" stop-color="#FF8A65" stop-opacity=".95"/><stop offset=".55" stop-color="#FF8A65" stop-opacity=".4"/><stop offset="1" stop-color="#FF8A65" stop-opacity="0"/></radialGradient></defs>
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="160" cy="150" rx="134" ry="6" fill="#1F2A44" fill-opacity=".07" stroke="none"/>
<path d="M30 116H262V127H30Z" fill="#FFC53D"/>
<path d="M30 62L226 70V81L30 73Z" fill="#FFC53D"/>
<path d="M-10 60H64C78 60 86 66 88 76V112C86 118 78 122 64 122H-10Z" fill="#3E7BFA"/>
<path d="M82 74C130 72 190 76 232 82L234 106C200 108 160 112 130 118C110 121 94 119 82 114Z" fill="#F6C9A8"/>
<path d="M226 84C234 72 240 58 244 48C247 41 258 42 259 50C260 66 258 90 254 104C251 112 240 114 230 108Z" fill="#F6C9A8"/>
<g class="kr-glow"><ellipse cx="156" cy="93" rx="32" ry="32" fill="url(#kirik-g)" stroke="none"/></g>
<g fill="#FFFFFF" stroke-width="5.5"><rect x="98" y="88" width="118" height="11" rx="2"/><circle cx="96" cy="87" r="6.5"/><circle cx="96" cy="100" r="6.5"/><circle cx="218" cy="87" r="6.5"/><circle cx="218" cy="100" r="6.5"/></g>
<g fill="#FFFFFF" stroke="none"><rect x="98" y="88" width="118" height="11" rx="2"/><circle cx="96" cy="87" r="6.5"/><circle cx="96" cy="100" r="6.5"/><circle cx="218" cy="87" r="6.5"/><circle cx="218" cy="100" r="6.5"/></g>
<path d="M152 88L159 92L152 95L159 99" fill="none" stroke="#E5484D" stroke-width="2.5"/>
<g transform="translate(54 56)"><rect class="kr-t kr-t1" x="-7" y="0" width="14" height="75" rx="4" fill="#FFFFFF"/></g>
<g transform="translate(108 56)"><rect class="kr-t kr-t2" x="-7" y="0" width="14" height="75" rx="4" fill="#FFFFFF"/></g>
<g transform="translate(200 56)"><rect class="kr-t kr-t3" x="-7" y="0" width="14" height="75" rx="4" fill="#FFFFFF"/></g>
<g transform="translate(234 56)"><rect class="kr-t kr-t4" x="-7" y="0" width="14" height="75" rx="4" fill="#FFFFFF"/></g>
</g>
</svg>`,
  },

  omurga: {
    label: 'Boyun / Omurga Yaralanması',
    tint: '#EEEBFF',
    svg: `<svg class="scene sc-omurga" viewBox="0 0 320 180" role="img" aria-label="Baş ve boyun elle sabit tutuluyor, omurga hizası korunuyor">
<defs><radialGradient id="omurga-g"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity=".65"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient></defs>
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<path class="om-ax" d="M24 90H308" stroke="#8E4EC6" stroke-width="2" stroke-dasharray="3 8" opacity=".6"/>
<rect x="216" y="66" width="80" height="20" rx="10" fill="#3E7BFA"/>
<rect x="216" y="94" width="80" height="20" rx="10" fill="#3E7BFA"/>
<rect x="290" y="63" width="12" height="26" rx="6" fill="#1F2A44"/>
<rect x="290" y="91" width="12" height="26" rx="6" fill="#1F2A44"/>
<rect x="124" y="42" width="94" height="15" rx="7.5" fill="#F6C9A8"/>
<rect x="124" y="123" width="94" height="15" rx="7.5" fill="#F6C9A8"/>
<g class="om-ch"><rect x="110" y="54" width="114" height="72" rx="26" fill="#9EC5FF"/></g>
<rect x="98" y="81" width="18" height="18" rx="5" fill="#F6C9A8"/>
<circle cx="78" cy="90" r="23" fill="#F6C9A8"/>
<path d="M64 71.6A23 23 0 0 0 64 108.4C57 100 57 80 64 71.6Z" fill="#1F2A44"/>
<g class="om-gl"><ellipse cx="104" cy="90" rx="15" ry="24" fill="url(#omurga-g)" stroke="none"/></g>
<g fill="#FFFFFF" stroke-width="2.25">
<rect x="100" y="86.5" width="9" height="7" rx="2.5"/><rect x="112" y="86" width="9" height="8" rx="2.5"/><rect x="124" y="85" width="9" height="10" rx="3"/><rect x="136" y="85" width="9" height="10" rx="3"/><rect x="148" y="84.5" width="9" height="11" rx="3"/><rect x="160" y="84.5" width="9" height="11" rx="3"/><rect x="172" y="84" width="9" height="12" rx="3"/><rect x="184" y="84" width="9" height="12" rx="3"/><rect x="196" y="83.5" width="9" height="13" rx="3"/><rect x="208" y="83" width="9" height="14" rx="3"/>
</g>
<rect x="14" y="50" width="24" height="22" rx="7" fill="#12A594"/>
<path d="M36 54C52 50 76 50 88 57C95 61 99 67 98 72C97 75 94 75 92 73C87 69 80 67 70 67L36 69Z" fill="#F6C9A8"/>
<rect x="14" y="108" width="24" height="22" rx="7" fill="#12A594"/>
<path d="M36 126C52 130 76 130 88 123C95 119 99 113 98 108C97 105 94 105 92 107C87 111 80 113 70 113L36 111Z" fill="#F6C9A8"/>
</g>
</svg>`,
  },

  yanik: {
    label: 'Yanık',
    tint: '#FFEADF',
    svg: `<svg class="scene sc-yanik" viewBox="0 0 320 180" role="img" aria-label="Yanık bölge akan soğuk su altında soğutuluyor">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<rect x="34" y="112" width="252" height="54" rx="10" fill="#FFC53D" fill-opacity=".45" stroke="none"/>
<path d="M34 125C70 121 104 129 140 125S220 120 286 127V146C240 150 200 142 160 146S80 150 34 144Z" fill="#FF8A65" fill-opacity=".45" stroke="none"/>
<path d="M44 112H276A10 10 0 0 1 286 122V127C220 120 176 129 140 125S70 121 34 125V122A10 10 0 0 1 44 112Z" fill="#F6C9A8" stroke="none"/>
<path d="M34 125C70 121 104 129 140 125S220 120 286 127M34 144C80 150 120 142 160 146S240 150 286 146" fill="none" stroke-width="2" opacity=".45"/>
<g fill="none" stroke="#F97316" stroke-width="1.8" opacity=".55"><circle cx="58" cy="156" r="5"/><circle cx="74" cy="158" r="4"/><circle cx="246" cy="156" r="5"/><circle cx="262" cy="158" r="4"/><circle cx="110" cy="157" r="4"/><circle cx="212" cy="157" r="4"/></g>
<path d="M40 137C80 132 110 140 150 136S230 131 280 137" fill="none" stroke="#E5484D" stroke-width="2" opacity=".6"/>
<path d="M252 112L248 96M252 112L253 130" fill="none" stroke-width="2"/>
<rect x="34" y="112" width="252" height="54" rx="10" fill="none"/>
<ellipse cx="160" cy="113.5" rx="40" ry="4.5" fill="#FF8A65" stroke="none"/>
<ellipse class="yn-burn" cx="160" cy="113.5" rx="40" ry="4.5" fill="#E5484D" stroke="none"/>
<g transform="translate(160 111)"><g class="yn-fl"><g class="yn-fk">
<path d="M0 0C-14 0-19-11-13-21C-10-26-10-31-11-38C-3-34 3-28 5-20C7-24 10-27 9-32C17-24 17-12 13-6C10-1 5 0 0 0Z" fill="#F97316"/>
<path d="M0-1C-7-1-9-7-6-13C-4-17-2-20-2-24C3-20 6-14 6-9C6-4 3-1 0-1Z" fill="#FFC53D" stroke="none"/>
</g></g></g>
<path class="yn-sh" d="M114 110Q160 104 206 110" fill="none" stroke="#9EC5FF" stroke-width="5"/>
<rect x="94" y="10" width="10" height="28" rx="3" fill="#E9EEF5"/>
<path d="M104 18H150Q166 18 166 34V40H154V34Q154 30 150 30H104Z" fill="#C5CEDB"/>
<path d="M125 18V11" stroke-width="5"/>
<rect x="114" y="5" width="22" height="7" rx="3.5" fill="#3E7BFA"/>
<g transform="translate(160 41)"><g class="yn-st"><rect x="-5.5" y="0" width="11" height="70" rx="5.5" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="2"/><path class="yn-fw" d="M0 6V64" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="5 11"/></g></g>
<g class="yn-sp"><circle cx="146" cy="104" r="2.5" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/><circle cx="174" cy="104" r="2.5" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/></g>
<g transform="translate(250 44)"><rect x="-27" y="-13" width="54" height="26" rx="13" fill="#FFFFFF"/><text y="5" text-anchor="middle" font-size="14" fill="#1F2A44" stroke="none">20 dk</text></g>
</g>
</svg>`,
  },

  donma: {
    label: 'Donma / Soğuk',
    tint: '#E4EEFF',
    svg: `<svg class="scene sc-donma" viewBox="0 0 320 180" role="img" aria-label="Donan el ovulmadan battaniyeye sarılarak ısıtılıyor">
<defs><radialGradient id="donma-g"><stop offset="0" stop-color="#FFC53D" stop-opacity=".75"/><stop offset="1" stop-color="#FFC53D" stop-opacity="0"/></radialGradient></defs>
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<g fill="none" stroke="#3E7BFA" stroke-width="2">
<g transform="translate(86 0)"><path class="dn-f dn-f1" d="M0-7V7M-6-3.5L6 3.5M-6 3.5L6-3.5"/></g>
<g transform="translate(122 0)"><path class="dn-f dn-f2" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
<g transform="translate(214 0)"><path class="dn-f dn-f3" d="M0-6V6M-5.2-3L5.2 3M-5.2 3L5.2-3"/></g>
<g transform="translate(240 0)"><path class="dn-f dn-f4" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
<g transform="translate(284 0)"><path class="dn-f dn-f5" d="M0-7V7M-6-3.5L6 3.5M-6 3.5L6-3.5"/></g>
<g transform="translate(20 0)"><path class="dn-f dn-f6" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
<g transform="translate(304 0)"><path class="dn-f dn-f7" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
</g>
<g class="dn-gl"><ellipse cx="172" cy="94" rx="76" ry="66" fill="url(#donma-g)" stroke="none"/></g>
<rect x="32" y="30" width="20" height="100" rx="10" fill="#FFFFFF"/>
<rect class="dn-lv" x="37.5" y="56" width="9" height="80" rx="4.5" fill="#3E7BFA" stroke="none"/>
<circle cx="42" cy="138" r="13" fill="#3E7BFA"/>
<path d="M56 46H62M56 62H60M56 78H62M56 94H60M56 110H62" stroke-width="2"/>
<rect x="146" y="128" width="52" height="38" rx="10" fill="#8E4EC6"/>
<path d="M158 130V160M186 130V160" stroke="#FFFFFF" stroke-width="2" opacity=".35"/>
<path d="M150 112C136 110 128 98 132 88C136 81 146 82 150 90" fill="#FF8A65"/>
<path d="M148 132V82C148 62 160 50 176 50C192 50 202 62 202 80V132Z" fill="#FF8A65"/>
<path d="M164 58V128M186 56V128" stroke="#F97316" stroke-width="3" opacity=".8"/>
<path d="M148 116L202 90V106L148 132Z" fill="#FFC53D"/>
<path d="M150 124L200 100" stroke="#F97316" stroke-width="2" stroke-dasharray="3 5"/>
<g fill="none" stroke="#F97316" stroke-width="2.5">
<g transform="translate(160 42)"><path class="dn-h dn-h1" d="M0 0C-4-4 4-8 0-12S4-20 0-24"/></g>
<g transform="translate(176 38)"><path class="dn-h dn-h2" d="M0 0C-4-4 4-8 0-12S4-20 0-24"/></g>
<g transform="translate(192 42)"><path class="dn-h dn-h3" d="M0 0C-4-4 4-8 0-12S4-20 0-24"/></g>
</g>
<path d="M276 124C290 124 290 144 276 144" fill="none" stroke-width="5"/>
<rect x="244" y="116" width="34" height="36" rx="7" fill="#FF8A65"/>
<path d="M246 128H276" stroke="#FFFFFF" stroke-width="3"/>
<g fill="none" stroke="#C5CEDB" stroke-width="2.5">
<g transform="translate(256 108)"><path class="dn-s dn-s1" d="M0 0C-3-4 3-7 0-11S3-18 0-22"/></g>
<g transform="translate(268 108)"><path class="dn-s dn-s2" d="M0 0C-3-4 3-7 0-11S3-18 0-22"/></g>
</g>
</g>
</svg>`,
  },

  sicak: {
    label: 'Sıcak Çarpması',
    tint: '#FFF2D1',
    svg: `<svg class="scene sc-sicak" viewBox="0 0 320 180" role="img" aria-label="Sıcak çarpmasında kişi gölgede, ıslak bezle serinletiliyor">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<g transform="translate(54 52)"><g class="sh-ry"><path d="M0-30V-40M15-26L20-34.6M26-15L34.6-20M30 0H40M26 15L34.6 20M15 26L20 34.6M0 30V40M-15 26L-20 34.6M-26 15L-34.6 20M-30 0H-40M-26-15L-34.6-20M-15-26L-20-34.6" stroke="#F97316" stroke-width="4"/></g><circle r="22" fill="#FFC53D"/></g>
<rect x="102" y="34" width="18" height="86" rx="9" fill="#FFFFFF"/>
<rect class="sh-lv" x="107" y="48" width="8" height="82" rx="4" fill="#E5484D" stroke="none"/>
<circle cx="111" cy="128" r="12" fill="#E5484D"/>
<path d="M124 48H129M124 64H127M124 80H129M124 96H127" stroke-width="2"/>
<ellipse cx="220" cy="150" rx="86" ry="7" fill="#3E7BFA" fill-opacity=".14" stroke="none"/>
<path d="M214 30V146"/>
<path d="M140 64C150 30 182 16 214 16S278 30 288 64Q278.75 71 269.5 64Q260.25 71 251 64Q241.75 71 232.5 64Q223.25 71 214 64Q204.75 71 195.5 64Q186.25 71 177 64Q167.75 71 158.5 64Q149.25 71 140 64Z" fill="#12A594"/>
<path d="M214 16C202 30 196 46 195.5 64Q204.75 71 214 64Q223.25 71 232.5 64C232 46 226 30 214 16Z" fill="#FFFFFF"/>
<rect x="148" y="144" width="152" height="7" rx="3.5" fill="#9EC5FF"/>
<rect x="262" y="116" width="34" height="28" rx="6" fill="#FFFFFF"/>
<path d="M226 128L280 106C287 103 292 107 291 113L232 143Z" fill="#3E7BFA"/>
<path d="M281 104C282 97 290 95 294 100L295 111L290 113Z" fill="#F6C9A8"/>
<rect x="172" y="126" width="60" height="18" rx="9" fill="#FF8A65"/>
<circle cx="162" cy="134" r="10" fill="#F6C9A8"/>
<rect x="152" y="120" width="18" height="7" rx="3" fill="#9EC5FF" stroke-width="2"/>
<g transform="translate(153 128)"><path class="sh-d1" d="M0-5C2-2 4 0 4 2.5A4 4 0 0 1-4 2.5C-4 0-2-2 0-5Z" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/></g>
<g transform="translate(169 128)"><path class="sh-d2" d="M0-5C2-2 4 0 4 2.5A4 4 0 0 1-4 2.5C-4 0-2-2 0-5Z" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/></g>
<g transform="translate(184 100)"><g class="sh-fan"><path d="M0 0L-17-9A19 19 0 0 1 17-9Z" fill="#E5484D"/><path d="M0 0L-9-16.5M0 0V-19M0 0L9-16.5" stroke-width="1.8"/><path d="M0 0V10" stroke-width="3.5"/></g></g>
<g class="sh-wd" fill="none" stroke="#3E7BFA" stroke-width="2"><path d="M172 108q-4 4 0 8"/><path d="M180 112q-4 4 0 8"/></g>
</g>
</svg>`,
  },

  bogulma: {
    label: 'Suda Boğulma',
    tint: '#DDF1FA',
    svg: `<svg class="scene sc-bogulma" viewBox="0 0 320 180" role="img" aria-label="Dalgalar arasında can simidi ve uzanan bir el">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<g class="bg-c1"><path d="M34 44H78A10 10 0 0 0 70 30A14 14 0 0 0 46 26A11 11 0 0 0 34 44Z" fill="#FFFFFF" stroke="none"/></g>
<g class="bg-c2"><path d="M222 32H258A8 8 0 0 0 252 21A11 11 0 0 0 233 18A9 9 0 0 0 222 32Z" fill="#FFFFFF" stroke="none"/></g>
<path class="bg-w1" d="M-80 104q20-12 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0V200H-80Z" fill="#9EC5FF"/>
<g class="bg-hd">
<path d="M112 140L119 98L131 100L126 142Z" fill="#F6C9A8"/>
<path d="M117 100C114 92 116 84 121 80L120 70C120 67 124 66 125 69L127 78L129 66C129 63 134 63 134 66L133 79L137 70C138 67 142 68 141 71L137 84C141 82 145 84 143 87C139 93 136 98 131 101Z" fill="#F6C9A8"/>
</g>
<g transform="translate(178 100)"><g class="bg-by">
<path d="M18-18C48-46 90-62 150-70" fill="none" stroke="#FF8A65" stroke-width="2.5"/>
<circle r="19" fill="none" stroke="#FFFFFF" stroke-width="14"/>
<circle r="19" fill="none" stroke="#E5484D" stroke-width="14" stroke-dasharray="14.92 14.92" transform="rotate(-22)"/>
<circle r="26" fill="none"/><circle r="12" fill="none"/>
<path d="M-16-12A20 20 0 0 1-4-20" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity=".9"/>
</g></g>
<path class="bg-w2" d="M-64 124q16-9 32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0V200H-64Z" fill="#3E7BFA"/>
<g fill="#FFFFFF" stroke="none" opacity=".8"><circle cx="40" cy="150" r="2.5"/><circle cx="250" cy="158" r="2.5"/><circle cx="140" cy="166" r="2"/><circle cx="290" cy="142" r="2"/></g>
</g>
</svg>`,
  },

  rentek: {
    label: 'Rentek Manevrası (Araçtan Çıkarma)',
    tint: '#EDF1F7',
    svg: `<svg class="scene sc-rentek" viewBox="0 0 320 180" role="img" aria-label="Rentek manevrası: yaralı baş ve boyun desteklenerek araçtan çıkarılıyor">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<path d="M14 160H306" stroke="#C5CEDB" stroke-width="3"/>
<path d="M18 128C18 114 24 107 36 105L74 99L96 66C99 61 103 59 109 59H152C158 59 162 62 165 67L182 97L194 99C200 100 203 105 203 111V134C203 139 199 142 194 142H27C22 142 18 139 18 134Z" fill="#C5CEDB"/>
<path d="M152 67H158L172 96H152Z" fill="#E9EEF5"/>
<path d="M100 67H146V136H96V102Z" fill="#E9EEF5"/>
<path d="M134 78C138 76 142 78 142 82L140 118H132Z" fill="#1F2A44"/>
<rect x="108" y="116" width="34" height="8" rx="3" fill="#1F2A44"/>
<path d="M102 86L110 104" stroke-width="4"/>
<circle cx="54" cy="146" r="14" fill="#1F2A44"/><circle cx="54" cy="146" r="5" fill="#C5CEDB" stroke="none"/>
<circle cx="170" cy="146" r="14" fill="#1F2A44"/><circle cx="170" cy="146" r="5" fill="#C5CEDB" stroke="none"/>
<rect x="18" y="110" width="9" height="6" rx="3" fill="#FFC53D" stroke-width="2"/>
<path d="M98 66L76 72V146L96 140Z" fill="#C5CEDB"/>
<path d="M95 70L79 75V100L95 99Z" fill="#E9EEF5" stroke-width="2"/>
<path class="rt-pa" d="M150 46C190 22 250 30 280 66" fill="none" stroke="#E5484D" stroke-width="2.5" stroke-dasharray="2 7"/>
<path d="M284 54L282 69L268 64" fill="none" stroke="#E5484D" stroke-width="2.5"/>
<g class="rt-pr">
<path d="M162 114L152 134L160 156M166 116L172 136L178 156" fill="none" stroke-width="8"/>
<path d="M150 74C158 72 166 78 166 86L164 116H150L146 82Z" fill="#F97316"/>
<circle cx="150" cy="62" r="9.5" fill="#F6C9A8"/>
<path d="M130 116H106V136" fill="none" stroke-width="13"/>
<path d="M130 116H106V136" fill="none" stroke="#3E7BFA" stroke-width="8"/>
<rect x="120" y="84" width="20" height="34" rx="8" fill="#9EC5FF"/>
<circle cx="132" cy="75" r="8.5" fill="#F6C9A8"/>
<path d="M156 82Q140 100 122 98" fill="none" stroke-width="9.5"/>
<path d="M156 82Q140 100 122 98" fill="none" stroke="#F97316" stroke-width="5"/>
<circle cx="122" cy="98" r="4" fill="#F6C9A8"/>
<path d="M152 76Q136 74 126 80" fill="none" stroke-width="9"/>
<path d="M152 76Q136 74 126 80" fill="none" stroke="#F97316" stroke-width="4.5"/>
<circle cx="125" cy="81" r="3.8" fill="#F6C9A8"/>
</g>
</g>
</svg>`,
  },

  tasima: {
    label: 'Taşıma Teknikleri',
    tint: '#E6F5EC',
    svg: `<svg class="scene sc-tasima" viewBox="0 0 320 180" role="img" aria-label="İki ilk yardımcı sedyeyle yaralı taşıyor">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 154H308" stroke="#C5CEDB" stroke-width="3"/>
<g class="ts-gr"><path d="M20 164h12M82 164h12M144 164h12M206 164h12M268 164h12M330 164h12" stroke="#C5CEDB" stroke-width="3"/></g>
<g fill="#1F2A44" stroke="none">
<g transform="translate(70 104)"><g class="ts-a1"><rect x="-5" y="0" width="10" height="48" rx="5"/><rect x="-5" y="44" width="15" height="7" rx="3.5"/></g></g>
<g transform="translate(70 104)"><g class="ts-a2"><rect x="-5" y="0" width="10" height="48" rx="5"/><rect x="-5" y="44" width="15" height="7" rx="3.5"/></g></g>
<g transform="translate(250 104)"><g class="ts-b1"><rect x="-5" y="0" width="10" height="48" rx="5"/><rect x="-5" y="44" width="15" height="7" rx="3.5"/></g></g>
<g transform="translate(250 104)"><g class="ts-b2"><rect x="-5" y="0" width="10" height="48" rx="5"/><rect x="-5" y="44" width="15" height="7" rx="3.5"/></g></g>
</g>
<g class="ts-up">
<path d="M86 104H236" stroke-width="4.5"/>
<rect x="98" y="98" width="128" height="8" rx="3" fill="#12A594"/>
<circle cx="110" cy="89" r="9" fill="#F6C9A8"/>
<path d="M118 98C118 88 122 84 130 84H200C206 84 210 82 213 78C217 73 225 75 225 84V98Z" fill="#9EC5FF"/>
<rect x="59" y="62" width="22" height="46" rx="9" fill="#E5484D"/>
<circle cx="70" cy="48" r="11" fill="#F6C9A8"/><circle cx="76" cy="47" r="1.6" fill="#1F2A44" stroke="none"/>
<path d="M73 70L88 102" stroke-width="10"/><path d="M73 70L88 102" stroke="#E5484D" stroke-width="5"/>
<circle cx="88" cy="104" r="4.5" fill="#F6C9A8"/>
<rect x="239" y="62" width="22" height="46" rx="9" fill="#F97316"/>
<circle cx="250" cy="48" r="11" fill="#F6C9A8"/><circle cx="256" cy="47" r="1.6" fill="#1F2A44" stroke="none"/>
<path d="M246 70L234 102" stroke-width="10"/><path d="M246 70L234 102" stroke="#F97316" stroke-width="5"/>
<circle cx="234" cy="104" r="4.5" fill="#F6C9A8"/>
</g>
</g>
</svg>`,
  },
};
