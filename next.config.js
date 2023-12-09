/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:"images.ctfassets.net"
            },{
                protocol:'https',
                hostname:"cdn-icons-png.flaticon.com"
            }

        ]
    }
}

module.exports = nextConfig
