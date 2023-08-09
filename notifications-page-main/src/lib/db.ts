import { writable } from 'svelte/store'

import avatarAngelaGray from '../assets/img/avatar-angela-gray.webp'
import avatarAnnaKim from '../assets/img/avatar-anna-kim.webp'
import avatarJacobThompson from '../assets/img/avatar-jacob-thompson.webp'
import avatarKimberlySmith from '../assets/img/avatar-kimberly-smith.webp'
import avatarMarkWebber from '../assets/img/avatar-mark-webber.webp'
import avatarNathanPeterson from '../assets/img/avatar-nathan-peterson.webp'
import avatarRizkyHasanuddin from '../assets/img/avatar-rizky-hasanuddin.webp'
import chessImg from '../assets/img/image-chess.webp'

const db = {
  notifications: [
    {
      userName: 'Anna Kim',
      userAvatar: avatarAnnaKim,
      datetime: '2 weeks ago',
      read: true,
      eventType: 'group',
      event: 'groupLeave',
      group: 'Chess Club',
    },
    {
      userName: 'Nathan Peterson',
      userAvatar: avatarNathanPeterson,
      datetime: '2 weeks ago',
      read: true,
      eventType: 'reaction',
      event: 'reaction',
      postTitle: '5 end-game strategies to increase your win rate'
    },
    {
      userName: 'Kimberly Smith',
      userAvatar: avatarKimberlySmith,
      datetime: '1 week ago',
      read: true,
      eventType: 'reaction',
      event: 'comment',
      postImg: chessImg
    },
    {
      userName: 'Rizky Hasanuddin',
      userAvatar: avatarRizkyHasanuddin,
      datetime: '5 days ago',
      read: true,
      eventType: 'message',
      event: 'privateMessage',
      message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
      userName: 'Jacob Thompson',
      userAvatar: avatarJacobThompson,
      datetime: '1 day ago',
      read: false,
      eventType: 'group',
      event: 'groupJoin',
      group: 'Chess Club'
    },
    {
      userName: 'Angela Gray',
      userAvatar: avatarAngelaGray,
      datetime: '5m ago',
      read: false,
      eventType: 'follow',
      event: 'follow'
    },
    {
      userName: 'Mark Webber',
      userAvatar: avatarMarkWebber,
      datetime: '1m ago',
      read: false,
      eventType: 'reaction',
      event: 'reaction',
      postTitle: 'My first tournament today!'
    },
  ],
}

export const notifications = writable(db.notifications)