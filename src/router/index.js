import MyPeople from '../views/people';
import MyAccess from '../views/access'

export const routes = [
  {
    path: '/',
    name: 'acesso',
    component: MyAccess,
  },
  {
    path: '/pessoas',
    name: 'people',
    component: MyPeople,
  },
]
