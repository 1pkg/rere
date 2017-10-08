from .db import *

class Assist(Db):
    def __init__(self, connection):
        super().__init__(connection)

    def fetchByRandom(self, limit):
        return self._fetch("""
            SELECT * FROM assist
            ORDER BY RANDOM() LIMIT %(limit)s
        """, {'limit': limit,})
