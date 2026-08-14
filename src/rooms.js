export const ROOMS = [
  { id: 0, name: '归档' },
  { id: 1, name: '未分类(友善)' },
  { id: 11, name: '校园生活' },
  { id: 12, name: '课程学业' },
  { id: 13, name: '科研' },
  { id: 14, name: '求职' },
  { id: 15, name: '升学' },
  { id: 16, name: '娱乐' },
  { id: 42, name: '洞务' },
];

export const DEFAULT_ROOM_ID = 1;
export const MAX_ROOM_ID = 999;

export function parse_room(room) {
  if (
    (typeof room !== 'number' && typeof room !== 'string') ||
    String(room).trim() === ''
  )
    return null;
  const room_id = Number(room);
  return Number.isSafeInteger(room_id) && room_id >= 0 && room_id <= MAX_ROOM_ID
    ? room_id
    : null;
}

export function normalize_room(room) {
  return parse_room(room) ?? DEFAULT_ROOM_ID;
}

export function is_builtin_room(room) {
  const room_id = parse_room(room);
  return room_id !== null && ROOMS.some(({ id }) => id === room_id);
}

export function should_show_all_rooms(room, configured_show_all_rooms) {
  const room_id = normalize_room(room);
  if (room_id === 0) return true;
  if (room_id > 10) return false;
  return configured_show_all_rooms;
}
