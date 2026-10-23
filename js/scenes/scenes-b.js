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
<path d="M224 96C238 93 252 93 264 98L283 105C291 108 292 116 285 119C277 122 262 121 250 122C240 123 232 124 224 124" fill="#F6C9A8"/>
<path d="M236 106C242 98 256 95 268 97C274 98 274 104 268 105C258 107 248 108 238 109" fill="#F6C9A8"/>
<path d="M258 113L282 114M254 118L276 119" fill="none" stroke-width="2" opacity=".4"/>
<rect x="16" y="80" width="50" height="60" rx="14" fill="#3E7BFA"/>
<path d="M54 86V134" stroke-width="2" opacity=".35"/>
<path class="kn-tr" d="M154 95C155 104 152 114 154 127" fill="none" stroke="#E5484D" stroke-width="3.5"/>
<ellipse cx="151" cy="92.5" rx="10" ry="3.2" fill="#E5484D" stroke="#B42318" stroke-width="2"/>
<g transform="translate(154 137)"><path class="kn-d1" d="M0-8C3-3 6 0 6 4A6 6 0 0 1-6 4C-6 0-3-3 0-8Z" fill="#E5484D" stroke="#B42318" stroke-width="1.6"/></g>
<g transform="translate(154 137)"><path class="kn-d2" d="M0-8C3-3 6 0 6 4A6 6 0 0 1-6 4C-6 0-3-3 0-8Z" fill="#E5484D" stroke="#B42318" stroke-width="1.6"/></g>
<g class="kn-press">
<path d="M96-14H132L146 62L122 68Z" fill="#F6C9A8"/>
<path d="M92-14H136L139 17C126 21 112 22 99 22Z" fill="#12A594"/>
<rect x="120" y="81" width="62" height="15" rx="4" fill="#FFFFFF"/>
<path d="M132 85V92M142 85V92M152 85V92M162 85V92M172 85V92" stroke="#C5CEDB" stroke-width="2"/>
<path d="M122 66C124 60 130 57 138 58L158 63C165 65 170 68 176 71L186 76C191 79 190 83 185 83H127C123 83 121 80 121 76Z" fill="#F6C9A8"/>
<path d="M162 72L180 78M156 77L176 82" fill="none" stroke-width="2" opacity=".4"/>
<path d="M128 78C136 80 146 80 154 78" fill="none" stroke-width="2"/>
</g>
</g>
</svg>`,
  },

  yara: {
    label: 'Yaralanmalar',
    tint: '#E6F6EE',
    svg: `<svg class="scene sc-yara" viewBox="0 0 320 180" role="img" aria-label="Kola sargı bezi sarılıyor ve yara bandı">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="156" cy="160" rx="118" ry="6" fill="#1F2A44" fill-opacity=".07" stroke="none"/>
<g transform="rotate(-6 160 110)">
<path d="M58 92C106 88 170 94 218 100V126C170 128 106 134 58 134Z" fill="#F6C9A8"/>
<path d="M216 99C230 96 244 96 256 101L275 108C283 111 284 119 277 122C269 125 254 124 242 125C232 126 224 127 216 127" fill="#F6C9A8"/>
<path d="M228 109C234 101 248 98 260 100C266 101 266 107 260 108C250 110 240 111 230 112" fill="#F6C9A8"/>
<path d="M250 116L274 117M246 121L268 122" fill="none" stroke-width="2" opacity=".4"/>
<rect x="18" y="84" width="48" height="58" rx="14" fill="#8E4EC6"/>
<path d="M56 90V136" stroke-width="2" opacity=".35"/>
<path d="M128 112C134 109 142 109 148 112" fill="none" stroke="#E5484D" stroke-width="3"/>
<g transform="translate(100 113) rotate(16)"><g class="yr-b yr-b1"><rect x="-12" y="-28" width="24" height="56" rx="5" fill="#FFFFFF"/><path d="M-5-21V21" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g transform="translate(122 113) rotate(16)"><g class="yr-b yr-b2"><rect x="-12" y="-28" width="24" height="56" rx="5" fill="#FFFFFF"/><path d="M-5-21V21" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g transform="translate(144 113) rotate(16)"><g class="yr-b yr-b3"><rect x="-12" y="-28" width="24" height="56" rx="5" fill="#FFFFFF"/><path d="M-5-21V21" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g transform="translate(166 113) rotate(16)"><g class="yr-b yr-b4"><rect x="-12" y="-28" width="24" height="56" rx="5" fill="#FFFFFF"/><path d="M-5-21V21" stroke="#C5CEDB" stroke-width="2"/></g></g>
<g class="yr-roll"><path d="M98 86L104 66H114L108 87Z" fill="#FFFFFF"/><g transform="translate(110 56)"><g class="yr-spin"><circle r="13" fill="#FFFFFF"/><circle r="5" fill="#E9EEF5" stroke-width="2"/><path d="M0-9A9 9 0 0 1 9 0" fill="none" stroke="#C5CEDB" stroke-width="2"/></g></g></g>
</g>
<g transform="translate(266 40) rotate(-30)"><g class="yr-pl"><rect x="-32" y="-11" width="64" height="22" rx="11" fill="#FFC53D"/><rect x="-11" y="-8" width="22" height="16" rx="3" fill="#FFFFFF" stroke-width="2.25"/><path d="M-24-3h.1M-19 3h.1M-24 3h.1M-19-3h.1M19-3h.1M24 3h.1M19 3h.1M24-3h.1" stroke-width="2.6"/></g></g>
<g transform="translate(206 62)"><path class="yr-s1" d="M0-8Q1-1 8 0Q1 1 0 8Q-1 1-8 0Q-1-1 0-8Z" fill="#FFC53D" stroke-width="1.8"/></g>
<g transform="translate(64 60)"><path class="yr-s2" d="M0-6Q1-1 6 0Q1 1 0 6Q-1 1-6 0Q-1-1 0-6Z" fill="#7EE2B8" stroke-width="1.8"/></g>
<g transform="translate(298 78)"><path class="yr-s3" d="M0-6Q1-1 6 0Q1 1 0 6Q-1 1-6 0Q-1-1 0-6Z" fill="#7EE2B8" stroke-width="1.8"/></g>
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
<path d="M186 94L189 104M131 128L133 136" fill="none" stroke="#C5CEDB" stroke-width="2"/>
<rect x="128" y="72" width="64" height="10" rx="3" fill="#FFFFFF"/>
<path d="M133 86H187" stroke="#E5484D" stroke-width="3"/>
<g transform="translate(161 117) rotate(-22)">
<rect x="-12" y="-25" width="24" height="48" rx="12" fill="#FFFFFF"/>
<path d="M-12-6V-13A12 12 0 0 1 12-13V-9Z" fill="#F6C9A8"/>
<rect x="-6" y="-22" width="12" height="9" rx="4" fill="#FFFFFF" stroke-width="2"/>
<path d="M-11 4L11-1M-11 13L11 8" stroke="#C5CEDB" stroke-width="2"/>
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
<ellipse cx="160" cy="152" rx="134" ry="6" fill="#1F2A44" fill-opacity=".07" stroke="none"/>
<path d="M30 116H262V128H30Z" fill="#FFC53D"/>
<path d="M30 59L226 68V81L30 72Z" fill="#FFC53D"/>
<path d="M-10 60H64C78 60 86 66 88 76V112C86 118 78 122 64 122H-10Z" fill="#3E7BFA"/>
<path d="M82 74C130 72 190 76 232 82L234 106C200 108 160 112 130 118C110 121 94 119 82 114Z" fill="#F6C9A8"/>
<path d="M226 84C234 72 240 58 244 48C247 41 258 42 259 50C260 66 258 90 254 104C251 112 240 114 230 108Z" fill="#F6C9A8"/>
<g class="kr-glow"><ellipse cx="156" cy="93" rx="32" ry="32" fill="url(#kirik-g)" stroke="none"/></g>
<g fill="#FFFFFF" stroke-width="5.5"><rect x="98" y="88" width="118" height="11" rx="2"/><circle cx="96" cy="87" r="6.5"/><circle cx="96" cy="100" r="6.5"/><circle cx="218" cy="87" r="6.5"/><circle cx="218" cy="100" r="6.5"/></g>
<g fill="#FFFFFF" stroke="none"><rect x="98" y="88" width="118" height="11" rx="2"/><circle cx="96" cy="87" r="6.5"/><circle cx="96" cy="100" r="6.5"/><circle cx="218" cy="87" r="6.5"/><circle cx="218" cy="100" r="6.5"/></g>
<path d="M151 87L159 91.5L152 95L160 100" fill="none" stroke="#E5484D" stroke-width="3"/>
<g transform="translate(54 54)"><g class="kr-t kr-t1"><rect x="-7" y="0" width="14" height="78" rx="4" fill="#FFFFFF"/><path d="M-4 3L-9-5M4 3L9-5" fill="none" stroke-width="2.5"/><circle cy="2" r="4" fill="#FFFFFF" stroke-width="2.25"/></g></g>
<g transform="translate(108 54)"><g class="kr-t kr-t2"><rect x="-7" y="0" width="14" height="78" rx="4" fill="#FFFFFF"/><path d="M-4 3L-9-5M4 3L9-5" fill="none" stroke-width="2.5"/><circle cy="2" r="4" fill="#FFFFFF" stroke-width="2.25"/></g></g>
<g transform="translate(200 54)"><g class="kr-t kr-t3"><rect x="-7" y="0" width="14" height="78" rx="4" fill="#FFFFFF"/><path d="M-4 3L-9-5M4 3L9-5" fill="none" stroke-width="2.5"/><circle cy="2" r="4" fill="#FFFFFF" stroke-width="2.25"/></g></g>
<g transform="translate(234 54)"><g class="kr-t kr-t4"><rect x="-7" y="0" width="14" height="78" rx="4" fill="#FFFFFF"/><path d="M-4 3L-9-5M4 3L9-5" fill="none" stroke-width="2.5"/><circle cy="2" r="4" fill="#FFFFFF" stroke-width="2.25"/></g></g>
</g>
</svg>`,
  },

  omurga: {
    label: 'Boyun / Omurga Yaralanması',
    tint: '#EEEBFF',
    svg: `<svg class="scene sc-omurga" viewBox="0 0 320 180" role="img" aria-label="Baş ve boyun iki elle sabit tutuluyor, omurga hizası korunuyor">
<defs><radialGradient id="omurga-g"><stop offset="0" stop-color="#7EE2B8"/><stop offset=".5" stop-color="#7EE2B8" stop-opacity=".55"/><stop offset="1" stop-color="#7EE2B8" stop-opacity="0"/></radialGradient></defs>
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<path d="M94 180V148C94 124 114 108 140 106H180C206 108 226 124 226 148V180" fill="#9EC5FF"/>
<rect x="146" y="112" width="28" height="70" rx="10" fill="#FFFFFF" fill-opacity=".45" stroke="none"/>
<rect x="148" y="82" width="24" height="26" rx="6" fill="#F6C9A8"/>
<path d="M142 106C148 114 172 114 178 106" fill="none" stroke-width="2.25"/>
<circle cx="160" cy="62" r="25" fill="#F6C9A8"/>
<path d="M135 60C135 44 147 36 161 36C175 36 185 45 185 58C177 50 166 47 154 49C145 51 139 55 135 60Z" fill="#1F2A44"/>
<circle cx="151" cy="65" r="2.3" fill="#1F2A44" stroke="none"/><circle cx="169" cy="65" r="2.3" fill="#1F2A44" stroke="none"/>
<path d="M154 75Q160 78 166 75" fill="none" stroke-width="2.25"/>
<g class="om-gl"><ellipse cx="160" cy="90" rx="26" ry="13" fill="url(#omurga-g)" stroke="none"/></g>
<g fill="#FFFFFF" stroke-width="2.25">
<path d="M148 89H153M167 89H172M147 98H152M168 98H173M146 107H151M169 107H174M144 117H150M170 117H176M143 128H149M171 128H177M142 139H148M172 139H178M142 150H148M172 150H178M141 161H147M173 161H179M141 172H147M173 172H179" stroke-width="3"/>
<rect x="153" y="86" width="14" height="6" rx="2.5"/><rect x="152.5" y="95" width="15" height="6.5" rx="2.5"/><rect x="152" y="104" width="16" height="7" rx="2.5"/><rect x="151" y="113" width="18" height="8" rx="3"/><rect x="150" y="124" width="20" height="8" rx="3"/><rect x="149" y="135" width="22" height="8.5" rx="3"/><rect x="149" y="146" width="22" height="8.5" rx="3"/><rect x="148" y="157" width="24" height="9" rx="3"/><rect x="148" y="168" width="24" height="9" rx="3"/>
</g>
<path d="M126 48L94-12H118L140 44Z" fill="#F6C9A8"/>
<path d="M88-12H124L121 12C112 15 102 15 94 13Z" fill="#12A594"/>
<path d="M124 44C119 60 120 80 126 94C128 99 135 100 137 96C141 87 144 75 144 63C144 53 141 45 137 41Z" fill="#F6C9A8"/>
<path d="M130 82L132 95M136 80L137 94" fill="none" stroke-width="2" opacity=".45"/>
<path d="M194 48L226-12H202L180 44Z" fill="#F6C9A8"/>
<path d="M232-12H196L199 12C208 15 218 15 226 13Z" fill="#12A594"/>
<path d="M196 44C201 60 200 80 194 94C192 99 185 100 183 96C179 87 176 75 176 63C176 53 179 45 183 41Z" fill="#F6C9A8"/>
<path d="M190 82L188 95M184 80L183 94" fill="none" stroke-width="2" opacity=".45"/>
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
<rect x="34" y="112" width="252" height="54" rx="10" fill="none"/>
<ellipse cx="160" cy="113.5" rx="40" ry="4.5" fill="#FF8A65" stroke="none"/>
<ellipse class="yn-burn" cx="160" cy="113.5" rx="40" ry="4.5" fill="#E5484D" stroke="none"/>
<g transform="translate(160 111)"><g class="yn-fl"><g class="yn-fk">
<path d="M0 0C-14 0-19-11-13-21C-10-26-10-31-11-38C-3-34 3-28 5-20C7-24 10-27 9-32C17-24 17-12 13-6C10-1 5 0 0 0Z" fill="#F97316"/>
<path d="M0-1C-7-1-9-7-6-13C-4-17-2-20-2-24C3-20 6-14 6-9C6-4 3-1 0-1Z" fill="#FFC53D" stroke="none"/>
</g></g></g>
<path class="yn-sh" d="M112 110Q160 104 208 110" fill="none" stroke="#9EC5FF" stroke-width="5"/>
<rect x="94" y="10" width="10" height="28" rx="3" fill="#E9EEF5"/>
<path d="M104 18H150Q167 18 167 35V40H153V35Q153 31 149 31H104Z" fill="#C5CEDB"/>
<path d="M125 18V11" stroke-width="5"/>
<rect x="114" y="5" width="22" height="7" rx="3.5" fill="#3E7BFA"/>
<g transform="translate(160 41)"><g class="yn-st"><rect x="-6.5" y="0" width="13" height="70" rx="6.5" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="2"/><path class="yn-fw" d="M0 6V64" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="5 11"/></g></g>
<g class="yn-sp"><circle cx="145" cy="104" r="2.5" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/><circle cx="175" cy="104" r="2.5" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/></g>
<g transform="translate(250 44)"><rect x="-27" y="-13" width="54" height="26" rx="13" fill="#FFFFFF"/><text y="5" text-anchor="middle" font-size="14" fill="#1F2A44" stroke="none">20 dk</text></g>
</g>
</svg>`,
  },

  donma: {
    label: 'Donma / Soğuk',
    tint: '#E4EEFF',
    svg: `<svg class="scene sc-donma" viewBox="0 0 320 180" role="img" aria-label="Üşüyen kişi kuru battaniyeye sarılmış, sıcak içecekle ısınıyor">
<defs><radialGradient id="donma-g"><stop offset="0" stop-color="#FFC53D" stop-opacity=".7"/><stop offset="1" stop-color="#FFC53D" stop-opacity="0"/></radialGradient></defs>
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<g fill="none" stroke="#3E7BFA" stroke-width="2">
<g transform="translate(104 0)"><path class="dn-f dn-f1" d="M0-7V7M-6-3.5L6 3.5M-6 3.5L6-3.5"/></g>
<g transform="translate(128 0)"><path class="dn-f dn-f2" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
<g transform="translate(236 0)"><path class="dn-f dn-f3" d="M0-6V6M-5.2-3L5.2 3M-5.2 3L5.2-3"/></g>
<g transform="translate(262 0)"><path class="dn-f dn-f4" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
<g transform="translate(292 0)"><path class="dn-f dn-f5" d="M0-7V7M-6-3.5L6 3.5M-6 3.5L6-3.5"/></g>
<g transform="translate(24 0)"><path class="dn-f dn-f6" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
<g transform="translate(212 0)"><path class="dn-f dn-f7" d="M0-5V5M-4.3-2.5L4.3 2.5M-4.3 2.5L4.3-2.5"/></g>
</g>
<g class="dn-gl"><ellipse cx="178" cy="100" rx="82" ry="72" fill="url(#donma-g)" stroke="none"/></g>
<rect x="54" y="38" width="18" height="88" rx="9" fill="#FFFFFF"/>
<rect class="dn-lv" x="59" y="58" width="8" height="76" rx="4" fill="#3E7BFA" stroke="none"/>
<circle cx="63" cy="134" r="12" fill="#3E7BFA"/>
<path d="M76 52H82M76 68H80M76 84H82M76 100H80" stroke-width="2"/>
<ellipse cx="178" cy="164" rx="56" ry="5" fill="#1F2A44" fill-opacity=".08" stroke="none"/>
<path d="M130 162C126 124 140 86 178 76C216 86 230 124 226 162Z" fill="#FF8A65"/>
<path d="M146 96V160M208 96V160M131 140H225" fill="none" stroke="#F97316" stroke-width="3" opacity=".75"/>
<path d="M179 79C197 88 218 120 222 162H174C166 130 168 100 179 79Z" fill="#FF8A65"/>
<path d="M208 104V160M174 140H224" fill="none" stroke="#F97316" stroke-width="3" opacity=".75"/>
<path d="M179 82C169 102 166 130 173 160" fill="none" stroke="#FFC53D" stroke-width="4.5"/>
<rect x="166" y="108" width="24" height="24" rx="4" fill="#FFFFFF"/>
<path d="M166 117H190" stroke="#12A594" stroke-width="4"/>
<ellipse cx="164" cy="123" rx="6.5" ry="7.5" fill="#F6C9A8"/>
<ellipse cx="192" cy="123" rx="6.5" ry="7.5" fill="#F6C9A8"/>
<g fill="none" stroke="#C5CEDB" stroke-width="2.5">
<g transform="translate(173 102)"><path class="dn-s dn-s1" d="M0 0C-3-4 3-7 0-11S3-18 0-22"/></g>
<g transform="translate(183 102)"><path class="dn-s dn-s2" d="M0 0C-3-4 3-7 0-11S3-18 0-22"/></g>
</g>
<circle cx="178" cy="58" r="19" fill="#F6C9A8"/>
<path d="M159 54C159 40 167 33 178 33C189 33 197 40 197 54Z" fill="#8E4EC6"/>
<rect x="157" y="48" width="42" height="9" rx="4.5" fill="#8E4EC6"/>
<circle cx="178" cy="30" r="5" fill="#FFFFFF"/>
<circle cx="171" cy="63" r="2.2" fill="#1F2A44" stroke="none"/><circle cx="185" cy="63" r="2.2" fill="#1F2A44" stroke="none"/>
<path d="M173 70Q178 73 183 70" fill="none" stroke-width="2.25"/>
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
<rect x="146" y="144" width="154" height="7" rx="3.5" fill="#9EC5FF"/>
<rect x="262" y="116" width="34" height="28" rx="6" fill="#FFFFFF"/>
<path d="M226 126L280 105C287 102 292 107 291 113L232 143Z" fill="#3E7BFA"/>
<path d="M281 104C282 97 290 95 294 100L295 111L290 113Z" fill="#F6C9A8"/>
<rect x="172" y="124" width="62" height="20" rx="10" fill="#FF8A65"/>
<path d="M182 131L214 136" stroke-width="9"/><path d="M182 131L214 136" stroke="#F6C9A8" stroke-width="4.5"/>
<rect x="166" y="129" width="10" height="9" rx="3" fill="#F6C9A8" stroke="none"/>
<circle cx="161" cy="131" r="12.5" fill="#F6C9A8"/>
<path d="M163 118.8Q167 113 171 119.5" fill="#F6C9A8"/>
<path d="M156 126Q159 128 162 126" fill="none" stroke-width="2"/>
<rect x="-10" y="-4" width="20" height="8" rx="3.5" fill="#9EC5FF" stroke-width="2.25" transform="translate(152 122) rotate(-32)"/>
<g transform="translate(144 127)"><path class="sh-d1" d="M0-5C2-2 4 0 4 2.5A4 4 0 0 1-4 2.5C-4 0-2-2 0-5Z" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/></g>
<g transform="translate(149 132)"><path class="sh-d2" d="M0-5C2-2 4 0 4 2.5A4 4 0 0 1-4 2.5C-4 0-2-2 0-5Z" fill="#9EC5FF" stroke="#3E7BFA" stroke-width="1.5"/></g>
<g transform="translate(182 98)"><g class="sh-fan"><path d="M0 0L-17-9A19 19 0 0 1 17-9Z" fill="#E5484D"/><path d="M0 0L-9-16.5M0 0V-19M0 0L9-16.5" stroke-width="1.8"/><path d="M0 0V10" stroke-width="3.5"/></g></g>
<g class="sh-wd" fill="none" stroke="#3E7BFA" stroke-width="2"><path d="M170 106q-4 4 0 8"/><path d="M178 110q-4 4 0 8"/></g>
</g>
</svg>`,
  },

  bogulma: {
    label: 'Suda Boğulma',
    tint: '#DDF1FA',
    svg: `<svg class="scene sc-bogulma" viewBox="0 0 320 180" role="img" aria-label="Dalgalar arasında can simidi ve ona uzanan bir el">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<g class="bg-c1"><path d="M34 44H78A10 10 0 0 0 70 30A14 14 0 0 0 46 26A11 11 0 0 0 34 44Z" fill="#FFFFFF" stroke="none"/></g>
<g class="bg-c2"><path d="M222 32H258A8 8 0 0 0 252 21A11 11 0 0 0 233 18A9 9 0 0 0 222 32Z" fill="#FFFFFF" stroke="none"/></g>
<path class="bg-w1" d="M-80 104q20-12 40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0t40 0V200H-80Z" fill="#9EC5FF"/>
<g transform="rotate(16 122 132)"><g class="bg-hd">
<path d="M114 142L119 98L131 100L128 144Z" fill="#F6C9A8"/>
<path d="M117 100C114 92 116 84 121 80L120 70C120 67 124 66 125 69L127 78L129 66C129 63 134 63 134 66L133 79L137 70C138 67 142 68 141 71L137 84C141 82 145 84 143 87C139 93 136 98 131 101Z" fill="#F6C9A8"/>
</g></g>
<g transform="translate(180 100)"><g class="bg-by">
<path d="M18-18C48-46 90-62 150-70" fill="none" stroke="#FF8A65" stroke-width="2.5"/>
<circle r="19" fill="none" stroke="#FFFFFF" stroke-width="14"/>
<circle r="19" fill="none" stroke="#E5484D" stroke-width="14" stroke-dasharray="14.92 14.92" transform="rotate(-22)"/>
<circle r="26" fill="none"/><circle r="12" fill="none"/>
<path d="M-16-12A20 20 0 0 1-4-20" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity=".9"/>
</g></g>
<path class="bg-w2" d="M-64 124q16-9 32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0t32 0V200H-64Z" fill="#3E7BFA"/>
<g class="bg-sp" fill="none" stroke="#FFFFFF" stroke-width="2.5"><path d="M104 118q4-4 8-2"/><path d="M140 116q4-2 8 2"/></g>
<g fill="#FFFFFF" stroke="none" opacity=".8"><circle cx="40" cy="150" r="2.5"/><circle cx="250" cy="158" r="2.5"/><circle cx="140" cy="166" r="2"/><circle cx="290" cy="142" r="2"/></g>
</g>
</svg>`,
  },

  rentek: {
    label: 'Rentek Manevrası (Araçtan Çıkarma)',
    tint: '#EDF1F7',
    svg: `<svg class="scene sc-rentek" viewBox="0 0 320 180" role="img" aria-label="Rentek manevrası: yaralı baş ve boyun desteklenerek araçtan çıkarılıyor">
<g stroke="#1F2A44" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
<path d="M12 161H308" stroke="#C5CEDB" stroke-width="3"/>
<path d="M14 132C14 118 20 111 32 109L66 104L88 70C91 65 96 62 102 62H140C146 62 150 65 153 70L168 102L172 103C176 104 178 108 178 114V136C178 141 174 144 169 144H22C17 144 14 141 14 136Z" fill="#C5CEDB"/>
<path d="M141 69H146L159 100H141Z" fill="#E9EEF5"/>
<path d="M96 68H134V138H90V106Z" fill="#E9EEF5"/>
<rect x="100" y="118" width="32" height="7" rx="3" fill="#1F2A44"/>
<path d="M98 88L104 104" stroke-width="4"/>
<circle cx="44" cy="148" r="13" fill="#1F2A44"/><circle cx="44" cy="148" r="4.5" fill="#C5CEDB" stroke="none"/>
<circle cx="152" cy="148" r="13" fill="#1F2A44"/><circle cx="152" cy="148" r="4.5" fill="#C5CEDB" stroke="none"/>
<rect x="14" y="114" width="8" height="6" rx="3" fill="#FFC53D" stroke-width="2"/>
<path d="M92 68L72 74V150L90 142Z" fill="#C5CEDB"/>
<path d="M89 72L75 77V101L89 100Z" fill="#E9EEF5" stroke-width="2"/>
<path class="rt-pa" d="M146 48C186 24 246 30 276 66" fill="none" stroke="#E5484D" stroke-width="2.5" stroke-dasharray="2 7"/>
<path d="M274 54L276 66L265 62" fill="none" stroke="#E5484D" stroke-width="2.5"/>
<g class="rt-pr">
<path d="M150 116L142 138L148 159M156 116L164 138L167 159" fill="none" stroke-width="11"/>
<path d="M150 116L142 138L148 159M156 116L164 138L167 159" fill="none" stroke="#3E7BFA" stroke-width="6"/>
<path d="M136 74C144 70 156 74 158 84L160 120H144L134 84Z" fill="#F97316"/>
<circle cx="141" cy="61" r="10" fill="#F6C9A8"/>
<path d="M131 59C131 52 136 50 141 50C147 50 151 54 151 59C146 56 137 56 131 59Z" fill="#1F2A44"/>
<path d="M112 118H94V138" fill="none" stroke-width="12.5"/>
<path d="M112 118H94V138" fill="none" stroke="#8E4EC6" stroke-width="7.5"/>
<rect x="106" y="86" width="20" height="36" rx="8" fill="#9EC5FF"/>
<circle cx="121" cy="78" r="9" fill="#F6C9A8"/>
<path d="M140 77Q124 77 112 87" fill="none" stroke-width="9"/>
<path d="M140 77Q124 77 112 87" fill="none" stroke="#F97316" stroke-width="4.5"/>
<circle cx="111" cy="87" r="4" fill="#F6C9A8"/>
<path d="M150 82Q132 104 110 100" fill="none" stroke-width="10"/>
<path d="M150 82Q132 104 110 100" fill="none" stroke="#F97316" stroke-width="5.5"/>
<circle cx="110" cy="100" r="4.5" fill="#F6C9A8"/>
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
<path d="M84 104H238" stroke-width="4.5"/>
<rect x="98" y="98" width="128" height="8" rx="3" fill="#12A594"/>
<circle cx="110" cy="89" r="9" fill="#F6C9A8"/>
<path d="M118 98C118 88 122 84 130 84H200C206 84 210 82 213 78C217 73 225 75 225 84V98Z" fill="#9EC5FF"/>
<rect x="59" y="62" width="22" height="46" rx="9" fill="#E5484D"/>
<path d="M68 79V89M63 84H73" stroke="#FFFFFF" stroke-width="3"/>
<circle cx="70" cy="48" r="11" fill="#F6C9A8"/>
<path d="M59 49C58 41 63 36 70 36C76 36 80 39 81 44C74 41 65 43 59 49Z" fill="#1F2A44"/>
<circle cx="76" cy="49" r="1.6" fill="#1F2A44" stroke="none"/>
<path d="M73 70L88 102" stroke-width="10"/><path d="M73 70L88 102" stroke="#E5484D" stroke-width="5"/>
<circle cx="88" cy="104" r="4.5" fill="#F6C9A8"/>
<rect x="239" y="62" width="22" height="46" rx="9" fill="#F97316"/>
<path d="M252 79V89M247 84H257" stroke="#FFFFFF" stroke-width="3"/>
<circle cx="250" cy="48" r="11" fill="#F6C9A8"/>
<path d="M239 49C238 41 243 36 250 36C256 36 260 39 261 44C254 41 245 43 239 49Z" fill="#1F2A44"/>
<circle cx="256" cy="49" r="1.6" fill="#1F2A44" stroke="none"/>
<path d="M246 70L234 102" stroke-width="10"/><path d="M246 70L234 102" stroke="#F97316" stroke-width="5"/>
<circle cx="234" cy="104" r="4.5" fill="#F6C9A8"/>
</g>
</g>
</svg>`,
  },
};
