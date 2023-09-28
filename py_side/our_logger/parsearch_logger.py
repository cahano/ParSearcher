#####################################################################
### Simple Singleton logger class
### 9/28/2023
### Can be made more complex (e.g. adding warning, info, etc levels)
#####################################################################

import logging as logger
from datetime import datetime

# Get current datetime and clean
now = datetime.now()
# dd/mm/YY H:M:S
dt_string = now.strftime("%m/%d/%Y %H:%M:%S")


class BaseLogger:

    # Checking for existing class instance
    _instance = None

    def __new__(cls):
        '''
        Singleton Logger Instance
        '''
        if not cls._instance:
            cls._instance = super(BaseLogger, cls).__new__(cls)
            # Instantiating logger
            cls.log = cls.init_logger()

        return cls._instance

    @classmethod
    def init_logger(cls):
        '''
        Building simple logger
        '''
        p_log = logger.getLogger('parsearch')
        p_log.setLevel(logger.DEBUG)

        # Setting logging so it appears in console
        # THIS IS FOR LOCAL DEV
        console = logger.StreamHandler()
        console.setLevel(level = logger.DEBUG)

        formatter = logger.Formatter('%(levelname)s::: %(message)s')

        console.setFormatter(formatter)
        p_log.addHandler(console)

        p_log.debug('*** LOGGER INSTANTIATED @ %s ***' % dt_string)

        return p_log



class ParsearchLogger:

    def __init__(self):
        '''
        Building logger
        '''
        self.our_log = BaseLogger().log

    def logit(self, msg):
        '''
        Simple logger call
        '''
        self.our_log.debug(msg)


