import hashlib

import base

class Crypto(base.Component):
    def getClientIdentifier(self, salt, host, userAgent, ip):
        hash = hashlib.md5()
        hash.update(salt.encode('utf-8'))
        hash.update(host.encode('utf-8'))
        hash.update(userAgent.encode('utf-8'))
        hash.update(ip.encode('utf-8'))
        hash.update(salt.encode('utf-8'))
        return hash.hexdigest()