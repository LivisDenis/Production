import React from 'react';

export interface SidebarLinkType {
    path: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    text: string
    authOnly?: boolean
}
