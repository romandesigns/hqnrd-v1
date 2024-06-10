'use client';

import React from 'react'
import {Button} from 'antd';
import { HiMenuAlt1 } from '../../icons';

export const FloatingBtn = () => {
  return (
    <button className='absolute bottom-24 right-10 p-2 border rounded-md md:hidden'>
      <HiMenuAlt1 size={25} />
    </button>  )
}
