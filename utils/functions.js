'use client'

import {useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';

export default function detectVersion() {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return _isMobile;
}