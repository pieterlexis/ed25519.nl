import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>ed25519 for DNSSEC</h1>
    <p>Ed25519 is a <a href="https://ed25519.cr.yp.to/">public-key signature</a> system invented by <a href="https://ed25519.cr.yp.to/ed25519-20110926.pdf">Bernstein et al.</a> that is standardized for use in internet protocols as <a href="https://tools.ietf.org/html/rfc8032">RFC 8032</a>. In <a href="https://tools.ietf.org/html/rfc8080">RFC 8080</a>, ed25519 (and ed448) were standardized for use in <a href="https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions">DNSSEC</a> in February 2017.</p>
    <p>This domainname, is DNSSEC signed with <a href="https://dnsviz.net/d/ed25519.nl/YjBthw/dnssec/">this algorithm</a>.</p>
    <h2>Why use ed25519 for DNSSEC signatures?</h2>
    <p>ed25519, as an <a href="https://en.wikipedia.org/wiki/Elliptic-curve_cryptography">elliptic curve cryptography</a>(ECC) signature algorithm, offers high security signatures in a small signature size. A 256 bit ECC key has similar security properties to 3072 bit RSA signatures (see table 3, page 53 of <a href="http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r4.pdf">NIST SP 800-57</a>).</p>
    <p>As an example, an ed25519 signature is 64 bytes long, compared to 256 bytes for an RSA 2048 signature. These smaller signatures ensure that <a href="https://blog.cloudflare.com/deep-inside-a-dns-amplification-ddos-attack/">DNS amplification</a> attacks are less severe than before, without sacrificing the security of DNSSEC.</p>
    <p>So what about EcDSA (also <a href="https://tools.ietf.org/html/rfc6605">standardized for use in DNSSEC</a>)? EcDSA requires random data when signing, this can lead to <a href="https://www.engadget.com/2010/12/29/hackers-obtain-ps3-private-cryptography-key-due-to-epic-programm/">leaking the private key</a> when bad random data is used. <a href="">Deterministic EcDSA does exists</a>, alleviating the need for this. ed25519, however, only requires random data when generating the private key.</p>
    <h2>DNS software supporting ed25519</h2>
    <p>This is an incomplete list of DNS tools and servers that support or will support ed25519:
    <ul>
      <li><a href="https://www.isc.org/downloads/bind/">BIND 9</a> (unreleased) has <a href="https://source.isc.org/cgi-bin/gitweb.cgi?p=bind9.git;a=commit;h=9b9182fe00c0cdaf9a94bbe84e685adad84f47a4">support</a> based on the upcoming <a href="https://github.com/openssl/openssl/pull/3361">OpenSSL 1.1.1</a></li>
      <li><a href="http://www.thekelleys.org.uk/dnsmasq/doc.html">dnsmasq</a> (since <a href="http://www.thekelleys.org.uk/dnsmasq/CHANGELOG">2.79</a>), a small DHCP server and DNS forwarder supports ed25519 using <a href="http://www.lysator.liu.se/~nisse/nettle/">libnettle</a></li>
      <li><a href="https://www.knot-dns.cz/">Knot DNS</a> (since <a href="https://www.knot-dns.cz/2017-09-29-version-260.html">2.6.0</a>) supports ed25519 using <a href="http://nmav.gnutls.org/2017/08/gnutls-3-6-0.html">GnuTLS 3.6.0</a></li>
      <li><a href="http://unbound.net">Unbound</a> (since <a href="http://unbound.net/download.html">1.6.4</a>) supports ed25519 via the unreleased OpenSSL 1.1.1 and since version 1.6.6 via libnettle</li>
      <li><a href="https://powerdns.com/auth.html">PowerDNS Authoritative Server</a> (since <a href="https://doc.powerdns.com/authoritative/changelog/4.0.html#powerdns-authoritative-server-4-0-0">4.0.0</a>) has support for signing with ed25519 using <a href="https://download.libsodium.org/doc/">libsodium</a></li>
      <li><a href="https://powerdns.com/recursor.html">PowerDNS Recursor</a> (since <a href="https://doc.powerdns.com/recursor/changelog/4.0.html#powerdns-recursor-4-0-5">4.0.5</a>) has support for validating ed25519 using libsodium</li>
      <li>The <a href="http://dnssec-debugger.verisignlabs.com/ed25519.nl">DNSSEC Debugger</a> from <a href="https://www.verisign.com/en_US/company-information/verisign-labs/index.xhtml">Verisign Labs</a>.</li>
      <li><a href="https://sidn.nl">SIDN</a>, the Dutch registry supports adding DS records for ed25519 keys since October 24th 2017</li>
      <li><a href="https://transip.nl">TransIP</a>, the Dutch registrar supports adding DS records for ed25519 keys in their control panel since October 24th 2017</li>
      <li><a href="https://1.1.1.1">1.1.1.1</a>, the anycast public DNS resolver from Cloudflare and APNIC is based on Knot and also supports validating ed25519</li>
      <li><a href="https://www.freedesktop.org/software/systemd/man/systemd-resolve.html">systemd-resolved</a>, the resolver/forwarder in systemd. A <a href="https://github.com/systemd/systemd/pull/7600">Pull Request</a> has been merged and is part of <a href="https://github.com/systemd/systemd/releases/tag/v236">release 236</a>.</li>
      <li><a href="https://developers.google.com/speed/public-dns/">Google Public DNS</a> added ed25519 validation late august 2018.</li>
      <li><a href="https://zonemaster.net/result/485845a5143d7615">Zonemaster</a>, a zone-checking tool by <a href="https://www.afnic.fr/en/">AFNIC</a> and <a href="https://www.iis.se/english/">IIS</a></li>
      <li><a href="https://www.opendnssec.org/">OpenDNSSEC</a>, a zone-signing tool, added support in 2.1.7 (October 2020).</li>
      <li><a href="http://dnsviz.net/">DNSViz</a>, everybody's favorite DNSSEC debugging tool.</li>
    </ul>
    </p>
    <h2>DNS software not supporting ed25519</h2>
      None!
    <ul>
    </ul>
  </div>
)

export default IndexPage
