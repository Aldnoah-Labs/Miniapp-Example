package com.aldiskatel.todoreminder

import android.content.ContentValues
import android.database.sqlite.SQLiteDatabase
import android.os.Bundle
import android.view.View
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import com.aldiskatel.todoreminder.db.TaskDbHelper
import com.aldiskatel.todoreminder.helper.TaskContract

class MainActivity : AppCompatActivity() {
    private lateinit var mHelper: TaskDbHelper
    private lateinit var mTaskListView: ListView
    private var mAdapter: ArrayAdapter<String>? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        mTaskListView = findViewById(R.id.list_todo)
        mHelper = TaskDbHelper(this)
        loadUI()
    }

    fun deleteTask(view: View) {
        val parent = view.parent as View
        val taskTextView = parent.findViewById<TextView>(R.id.task_title)
        val task = taskTextView.text.toString()
        val db = mHelper.writableDatabase
        db.delete(
            TaskContract.TaskEntry.TABLE,
            TaskContract.TaskEntry.COL_TASK_TITLE + " = ?",
            arrayOf(task)
        )
        db.close()
        loadUI()
    }

    private fun loadUI() {
        val taskList = ArrayList<String>()
        val db = mHelper.readableDatabase
        val cursor = db.query(
            TaskContract.TaskEntry.TABLE,
            arrayOf(TaskContract.TaskEntry._ID, TaskContract.TaskEntry.COL_TASK_TITLE),
            null,
            null,
            null,
            null,
            null
        )
        while (cursor.moveToNext()) {
            val idx = cursor.getColumnIndex(TaskContract.TaskEntry.COL_TASK_TITLE)
            taskList.add(cursor.getString(idx))
        }

        if (mAdapter == null) {
            mAdapter = ArrayAdapter(
                this,
                R.layout.item_todo,
                R.id.task_title,
                taskList
            )
            mTaskListView.adapter = mAdapter
        } else {
            mAdapter?.clear()
            mAdapter?.addAll(taskList)
            mAdapter?.notifyDataSetChanged()
        }

        cursor.close()
        db.close()
    }

    fun addTask(view: View) {
        val taskEditText = EditText(this)
        val dialog = AlertDialog.Builder(this)
            .setTitle("Add Task")
            .setView(taskEditText)
            .setPositiveButton("Add") { dialog_, which ->
                val task = taskEditText.text.toString()
                val db = mHelper.writableDatabase
                val values = ContentValues()
                values.put(TaskContract.TaskEntry.COL_TASK_TITLE, task)
                db.insertWithOnConflict(
                    TaskContract.TaskEntry.TABLE,
                    null,
                    values,
                    SQLiteDatabase.CONFLICT_REPLACE
                )
                db.close()
                Toast.makeText(view.context, "Todo added", Toast.LENGTH_SHORT).show()
                loadUI()
            }
            .setNegativeButton("Cancel", null)
            .create()
        dialog.show()
    }
}
