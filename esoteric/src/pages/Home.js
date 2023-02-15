import React from 'react';





import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';
//change directory once those files are made





const loggedIn = Auth.loggedIn();