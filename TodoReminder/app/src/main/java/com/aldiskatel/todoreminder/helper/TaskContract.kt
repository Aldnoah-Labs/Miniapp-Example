package com.aldiskatel.todoreminder.helper

import android.provider.BaseColumns

class TaskContract {
    companion object {
        const val DB_NAME = "todo.db"
        const val DB_VERSION = 1
    }

    class TaskEntry : BaseColumns {

        companion object {
            const val TABLE = "tasks"
            const val COL_TASK_TITLE = "title"
            const val _ID = BaseColumns._ID
        }
    }
}