'use client'
import React from 'react'
import { Breadcrumb } from "antd";
import Link from 'next/link';
import { Locale } from '@/i18n-config';

export function BreadCrumb({lang}: {lang: Locale}) {
  const {Item} = Breadcrumb;
  return (
    <Breadcrumb items={[
        {
          title: <Link href={`/${lang}/portal/soporte`}>Soporte</Link>,
        },
        {
          title: <Link href={`/${lang}/portal/soporte?status=active`}>Active</Link>,
        },
        {
          title: <Link href={`/${lang}/portal/soporte?status=pending`}>Pending</Link>,
        }
      ]} />
  )
}
