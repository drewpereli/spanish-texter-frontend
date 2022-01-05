import Model, { attr, belongsTo } from '@ember-data/model';
import UserModel from './user';

export const TIMEZONES = <const>[
  'Abu Dhabi',
  'Adelaide',
  'Africa/Algiers',
  'Africa/Cairo',
  'Africa/Casablanca',
  'Africa/Harare',
  'Africa/Johannesburg',
  'Africa/Monrovia',
  'Africa/Nairobi',
  'Alaska',
  'Almaty',
  'America/Argentina/Buenos_Aires',
  'America/Bogota',
  'America/Caracas',
  'America/Chicago',
  'America/Chihuahua',
  'America/Denver',
  'America/Godthab',
  'America/Guatemala',
  'America/Guyana',
  'America/Halifax',
  'America/Indiana/Indianapolis',
  'America/Juneau',
  'America/La_Paz',
  'America/Lima',
  'America/Lima',
  'America/Los_Angeles',
  'America/Mazatlan',
  'America/Mexico_City',
  'America/Mexico_City',
  'America/Monterrey',
  'America/Montevideo',
  'America/New_York',
  'America/Phoenix',
  'America/Puerto_Rico',
  'America/Regina',
  'America/Santiago',
  'America/Sao_Paulo',
  'America/St_Johns',
  'America/Tijuana',
  'American Samoa',
  'Amsterdam',
  'Arizona',
  'Asia/Almaty',
  'Asia/Baghdad',
  'Asia/Baku',
  'Asia/Bangkok',
  'Asia/Bangkok',
  'Asia/Chongqing',
  'Asia/Colombo',
  'Asia/Dhaka',
  'Asia/Dhaka',
  'Asia/Hong_Kong',
  'Asia/Irkutsk',
  'Asia/Jakarta',
  'Asia/Jerusalem',
  'Asia/Kabul',
  'Asia/Kamchatka',
  'Asia/Karachi',
  'Asia/Karachi',
  'Asia/Kathmandu',
  'Asia/Kolkata',
  'Asia/Kolkata',
  'Asia/Kolkata',
  'Asia/Kolkata',
  'Asia/Krasnoyarsk',
  'Asia/Kuala_Lumpur',
  'Asia/Kuwait',
  'Asia/Magadan',
  'Asia/Muscat',
  'Asia/Muscat',
  'Asia/Novosibirsk',
  'Asia/Rangoon',
  'Asia/Riyadh',
  'Asia/Seoul',
  'Asia/Shanghai',
  'Asia/Singapore',
  'Asia/Srednekolymsk',
  'Asia/Taipei',
  'Asia/Tashkent',
  'Asia/Tbilisi',
  'Asia/Tehran',
  'Asia/Tokyo',
  'Asia/Tokyo',
  'Asia/Tokyo',
  'Asia/Ulaanbaatar',
  'Asia/Urumqi',
  'Asia/Vladivostok',
  'Asia/Yakutsk',
  'Asia/Yekaterinburg',
  'Asia/Yerevan',
  'Astana',
  'Athens',
  'Atlantic Time (Canada)',
  'Atlantic/Azores',
  'Atlantic/Cape_Verde',
  'Atlantic/South_Georgia',
  'Auckland',
  'Australia/Adelaide',
  'Australia/Brisbane',
  'Australia/Darwin',
  'Australia/Hobart',
  'Australia/Melbourne',
  'Australia/Melbourne',
  'Australia/Perth',
  'Australia/Sydney',
  'Azores',
  'Baghdad',
  'Baku',
  'Bangkok',
  'Beijing',
  'Belgrade',
  'Berlin',
  'Bern',
  'Bogota',
  'Brasilia',
  'Bratislava',
  'Brisbane',
  'Brussels',
  'Bucharest',
  'Budapest',
  'Buenos Aires',
  'Cairo',
  'Canberra',
  'Cape Verde Is.',
  'Caracas',
  'Casablanca',
  'Central America',
  'Central Time (US & Canada)',
  'Chatham Is.',
  'Chennai',
  'Chihuahua',
  'Chongqing',
  'Copenhagen',
  'Darwin',
  'Dhaka',
  'Dublin',
  'Eastern Time (US & Canada)',
  'Edinburgh',
  'Ekaterinburg',
  'Etc/GMT+12',
  'Etc/UTC',
  'Europe/Amsterdam',
  'Europe/Athens',
  'Europe/Belgrade',
  'Europe/Berlin',
  'Europe/Bratislava',
  'Europe/Brussels',
  'Europe/Bucharest',
  'Europe/Budapest',
  'Europe/Copenhagen',
  'Europe/Dublin',
  'Europe/Helsinki',
  'Europe/Istanbul',
  'Europe/Kaliningrad',
  'Europe/Kiev',
  'Europe/Lisbon',
  'Europe/Ljubljana',
  'Europe/London',
  'Europe/London',
  'Europe/Madrid',
  'Europe/Minsk',
  'Europe/Moscow',
  'Europe/Moscow',
  'Europe/Paris',
  'Europe/Prague',
  'Europe/Riga',
  'Europe/Rome',
  'Europe/Samara',
  'Europe/Sarajevo',
  'Europe/Skopje',
  'Europe/Sofia',
  'Europe/Stockholm',
  'Europe/Tallinn',
  'Europe/Vienna',
  'Europe/Vilnius',
  'Europe/Volgograd',
  'Europe/Warsaw',
  'Europe/Zagreb',
  'Europe/Zurich',
  'Europe/Zurich',
  'Fiji',
  'Georgetown',
  'Greenland',
  'Guadalajara',
  'Guam',
  'Hanoi',
  'Harare',
  'Hawaii',
  'Helsinki',
  'Hobart',
  'Hong Kong',
  'Indiana (East)',
  'International Date Line West',
  'Irkutsk',
  'Islamabad',
  'Istanbul',
  'Jakarta',
  'Jerusalem',
  'Kabul',
  'Kaliningrad',
  'Kamchatka',
  'Karachi',
  'Kathmandu',
  'Kolkata',
  'Krasnoyarsk',
  'Kuala Lumpur',
  'Kuwait',
  'Kyiv',
  'La Paz',
  'Lima',
  'Lisbon',
  'Ljubljana',
  'London',
  'Madrid',
  'Magadan',
  'Marshall Is.',
  'Mazatlan',
  'Melbourne',
  'Mexico City',
  'Mid-Atlantic',
  'Midway Island',
  'Minsk',
  'Monrovia',
  'Monterrey',
  'Montevideo',
  'Moscow',
  'Mountain Time (US & Canada)',
  'Mumbai',
  'Muscat',
  'Nairobi',
  'New Caledonia',
  'New Delhi',
  'Newfoundland',
  'Novosibirsk',
  'Osaka',
  'Pacific Time (US & Canada)',
  'Pacific/Apia',
  'Pacific/Auckland',
  'Pacific/Auckland',
  'Pacific/Chatham',
  'Pacific/Fakaofo',
  'Pacific/Fiji',
  'Pacific/Guadalcanal',
  'Pacific/Guam',
  'Pacific/Honolulu',
  'Pacific/Majuro',
  'Pacific/Midway',
  'Pacific/Noumea',
  'Pacific/Pago_Pago',
  'Pacific/Port_Moresby',
  'Pacific/Tongatapu',
  'Paris',
  'Perth',
  'Port Moresby',
  'Prague',
  'Pretoria',
  'Puerto Rico',
  'Quito',
  'Rangoon',
  'Riga',
  'Riyadh',
  'Rome',
  'Samara',
  'Samoa',
  'Santiago',
  'Sapporo',
  'Sarajevo',
  'Saskatchewan',
  'Seoul',
  'Singapore',
  'Skopje',
  'Sofia',
  'Solomon Is.',
  'Srednekolymsk',
  'Sri Jayawardenepura',
  'St. Petersburg',
  'Stockholm',
  'Sydney',
  'Taipei',
  'Tallinn',
  'Tashkent',
  'Tbilisi',
  'Tehran',
  'Tijuana',
  'Tokelau Is.',
  'Tokyo',
  'Ulaanbaatar',
  'Urumqi',
  'UTC',
  'Vienna',
  'Vilnius',
  'Vladivostok',
  'Volgograd',
  'Warsaw',
  'Wellington',
  'West Central Africa',
  'Yakutsk',
  'Yerevan',
  'Zagreb',
  'Zurich',
  "Nuku'alofa",
];

export type Timezone = typeof TIMEZONES[number];

export default class UserSettingsModel extends Model {
  @belongsTo('user', { async: false }) declare user: UserModel;

  @attr('string') declare timezone: Timezone;
}
